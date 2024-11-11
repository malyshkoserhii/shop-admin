import * as React from 'react';

import { container } from './containers.styles';

type ContainerProps = {
	children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps): React.ReactNode => {
	return <div className={container}>{children}</div>;
};
