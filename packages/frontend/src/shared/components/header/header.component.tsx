import * as React from 'react';

import { header, logo, nav } from './header.styles';

export const Header = (): React.ReactNode => {
	return (
		<header className={header}>
			<img
				src="src/assets/images/logo.png"
				alt="logo"
				width={308}
				height={58}
				className={logo}
			/>

			<nav className={nav}></nav>
		</header>
	);
};
