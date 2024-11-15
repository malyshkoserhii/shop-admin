import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PortalProvider } from '@blueprintjs/core';
import './shared/styles/global-styles.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import { BrowserRouter } from 'react-router-dom';
import App from '~modules/app/app';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={queryClient}>
		<PortalProvider portalClassName="my-custom-class">
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</PortalProvider>
	</QueryClientProvider>,
);
