import axios, { AxiosResponse } from 'axios';

import { useAuthStore } from '../../store/auth.store';

export const mainAxios = axios.create({
	withCredentials: true,
});

mainAxios.interceptors.response.use(
	(response): AxiosResponse<unknown, unknown> => {
		return response;
	},
	async (error) => {
		if (
			Boolean(error.response) &&
			error.response?.status === 401 &&
			error.response?.data.path === '/auth/refresh'
		) {
			useAuthStore.getState().setAuth(false);
			useAuthStore
				.getState()
				.setTokens({ access_token: null, refresh_token: null });
		}
		return Promise.reject(error);
	},
);
