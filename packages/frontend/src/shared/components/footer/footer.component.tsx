import * as React from 'react';

import { footer, text } from './footer.styles';

export const Footer = (): React.ReactNode => {
	return (
		<footer className={footer}>
			<h4 className={text}>Copyright &copy; 2024 AWESOME STORE</h4>
		</footer>
	);
};
