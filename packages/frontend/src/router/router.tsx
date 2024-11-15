import * as React from 'react';
import { privateRoutes, publicRoutes } from './routes';
import { Container } from '~shared/components/container';
import { Header } from '~shared/components/header';
import { Footer } from '~shared/components/footer';
import { Main } from '~shared/components/main';
import { useAuthStore } from '~store/auth.store';

export const MainRouter: React.FunctionComponent = () => {
	const auth = useAuthStore((state) => state.auth);

	return (
		<Container>
			<Header />
			<Main>{auth ? privateRoutes : publicRoutes}</Main>
			<Footer />
		</Container>
	);
};
