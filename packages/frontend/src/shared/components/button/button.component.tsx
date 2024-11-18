import * as React from 'react';
import {
	Button as BlueprintButton,
	ButtonProps as BlueprintButtonProps,
	Intent,
} from '@blueprintjs/core';
import classNames from 'classnames';

import { btnStyles } from './button.styles';

type ButtonProps = {
	text: string;
	onClick?: () => void;
	intent?: Intent;
	extraBtnStyles?: string;
	props?: BlueprintButtonProps;
};

export const Button: React.FunctionComponent<ButtonProps> = ({
	text,
	extraBtnStyles,
	onClick,
	intent = 'primary',
	props,
}) => {
	return (
		<BlueprintButton
			text={text}
			className={classNames([btnStyles, extraBtnStyles])}
			onClick={onClick}
			intent={intent}
			{...props}
		/>
	);
};
