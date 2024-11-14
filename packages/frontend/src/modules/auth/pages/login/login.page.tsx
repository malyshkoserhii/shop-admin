import * as React from 'react';

import { container } from './login.styles';
import { LoginForm } from '../../components/login-form.component';

export const LoginPage = (): React.ReactNode => {
	return (
		<div className={container}>
			<LoginForm />
		</div>
	);
};
