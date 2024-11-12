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
	intent: Intent;
	extraBtnStyles?: string;
	props?: BlueprintButtonProps;
};

const Button: React.FunctionComponent<ButtonProps> = ({
	text,
	intent = 'primary',
	extraBtnStyles,
	...props
}) => {
	return (
		<BlueprintButton
			text={text}
			intent={intent}
			className={classNames([btnStyles, extraBtnStyles])}
			{...props}
		/>
	);
};

export default Button;
