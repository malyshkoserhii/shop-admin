import * as React from 'react';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { NavLink } from 'react-router-dom';

import {
	activeLink,
	header,
	inactiveLink,
	logo,
	logoutBtn,
	nav,
} from './header.styles';
import { useAuthStore } from '~store/auth.store';
import { QUERY_KEYS, ROUTER_KEYS } from '~shared/keys';
import { authService } from '~/services';
import { IServerError } from '~shared/services/types';

export const Header = (): React.ReactNode => {
	const auth = useAuthStore((state) => state.auth);
	const setAuth = useAuthStore((state) => state.setAuth);
	const setTokens = useAuthStore((state) => state.setTokens);

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
		<header className={header}>
			<img
				src="src/assets/images/logo.png"
				alt="logo"
				width={308}
				height={58}
				className={logo}
			/>

			{auth && (
				<nav className={nav}>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeLink : inactiveLink
						}
						to={ROUTER_KEYS.PRODUCTS}
					>
						Products
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeLink : inactiveLink
						}
						to={ROUTER_KEYS.ORDERS}
					>
						Orders
					</NavLink>

					<button className={logoutBtn} onClick={signout}>
						Logout
					</button>
				</nav>
			)}
		</header>
	);
};
