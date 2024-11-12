import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '~modules/app/auth/pages/login/login.page';
import { ROUTER_KEYS } from '~shared/keys';

export const publicRoutes = (
	<Routes>
		<Route path="/*" element={<Navigate to={ROUTER_KEYS.ALL_MATCH} />} />
		<Route path={ROUTER_KEYS.LOGIN} element={<LoginPage />} />
	</Routes>
);

export const privateRoutes = <Routes></Routes>;
