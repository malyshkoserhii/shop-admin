import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage } from '~modules/auth/pages/login/login.page';
import { OrdersPage } from '~modules/orders/pages/orders';
import { ProductsScreen } from '~modules/products/pages/products';
import { ROUTER_KEYS } from '~shared/keys';

export const publicRoutes = (
	<Routes>
		<Route path={ROUTER_KEYS.LOGIN} element={<LoginPage />} />
		<Route
			path={ROUTER_KEYS.ALL_MATCH}
			element={<Navigate to={ROUTER_KEYS.LOGIN} />}
		/>
	</Routes>
);

export const privateRoutes = (
	<Routes>
		<Route path={ROUTER_KEYS.PRODUCTS} element={<ProductsScreen />} />
		<Route path={ROUTER_KEYS.ORDERS} element={<OrdersPage />} />
		<Route
			path={ROUTER_KEYS.ALL_MATCH}
			element={<Navigate to={ROUTER_KEYS.PRODUCTS} />}
		/>
	</Routes>
);
