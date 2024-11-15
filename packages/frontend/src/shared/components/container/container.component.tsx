import * as React from 'react';

import { container } from './containers.styles';
import { useAuthStore } from '~store/auth.store';
import { mainAxios } from '~shared/services/mainAxios';
import { authService } from '~/services';

type ContainerProps = {
	children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps): React.ReactNode => {
	const accessToken = useAuthStore((state) => state.tokens.access_token);
	const refreshToken = useAuthStore((state) => state.tokens.refresh_token);
	const setTokens = useAuthStore((state) => state.setTokens);

	React.useLayoutEffect(() => {
		const requestIntercept = mainAxios.interceptors.request.use(
			(config) => {
				if (!config.headers['Authorization']) {
					config.headers['Authorization'] = `Bearer ${accessToken}`;
				}
				return config;
			},
			(error) => Promise.reject(error),
		);

		const responseIntercept = mainAxios.interceptors.response.use(
			(response) => response,
			async (error) => {
				const prevRequest = error?.config;

				if (error?.response?.status === 401 && !prevRequest?.sent) {
					prevRequest.sent = true;
					const data = await authService.refresh(refreshToken);
					prevRequest.headers['Authorization'] =
						`Bearer ${data.access_token}`;
					setTokens({
						access_token: data.access_token,
						refresh_token: data.refresh_token,
					});
					return mainAxios(prevRequest);
				}
				return Promise.reject(error);
			},
		);

		return () => {
			mainAxios.interceptors.request.eject(requestIntercept);
			mainAxios.interceptors.response.eject(responseIntercept);
		};
	}, [refreshToken]);

	return <div className={container}>{children}</div>;
};
