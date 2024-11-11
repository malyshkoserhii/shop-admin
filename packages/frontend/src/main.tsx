import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from '~modules/app/app';
import { PortalProvider } from '@blueprintjs/core';
import './shared/styles/global-styles.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<PortalProvider portalClassName="my-custom-class">
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</PortalProvider>,
);
