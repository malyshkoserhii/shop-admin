import * as React from 'react';
import { useMutation } from '@tanstack/react-query';
import { authService } from '~/services';
import Button from '~shared/components/button/button.component';
import { useAuthStore } from '~store/auth.store';
import { QUERY_KEYS } from '~shared/keys';
import { AxiosError } from 'axios';
import { IServerError } from '~shared/services/types';

export const ProductsScreen = (): React.ReactNode => {
	const setAuth = useAuthStore.getState().setAuth;
	const setTokens = useAuthStore.getState().setTokens;

	const logout = async (): Promise<void> => await authService.signout();

	const { mutateAsync } = useMutation({
		mutationKey: [QUERY_KEYS.AUTH],
		mutationFn: logout,
		onSuccess: () => {
			setAuth(false);
			setTokens({
				access_token: null,
				refresh_token: null,
			});
		},
		onError: (error: AxiosError<IServerError>) => {
			console.log(error);
		},
	});

	const signout = async (): Promise<void> => {
		await mutateAsync();
	};

	return (
		<div>
			<Button text="Sign out" onClick={signout} intent="danger" />
		</div>
	);
};
