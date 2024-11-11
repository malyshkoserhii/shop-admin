import * as React from 'react';

import { main } from './main.styles';

type MainProps = {
	children: React.ReactNode;
};

export const Main = ({ children }: MainProps): React.ReactNode => {
	return <main className={main}>{children}</main>;
};
