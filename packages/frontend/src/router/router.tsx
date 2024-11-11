import * as React from 'react';
import { publicRoutes } from './routes';
import { Container } from '~shared/components/container';
import { Header } from '~shared/components/header';
import { Footer } from '~shared/components/footer';
import { Main } from '~shared/components/main';

export const MainRouter: React.FunctionComponent = () => {
	return (
		<Container>
			<Header />
			<Main>{publicRoutes}</Main>
			<Footer />
		</Container>
	);
};
