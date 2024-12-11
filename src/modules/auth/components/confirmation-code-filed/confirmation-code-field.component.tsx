import * as React from 'react';
import { Text } from 'react-native';
import {
	CodeField,
	useBlurOnFulfill,
	useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import { styles, focused } from './confirmation-code-field.styles';

type ConfirmationCodeFieldProps = {
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
};

export const ConfirmationCodeField: React.FunctionComponent<
	ConfirmationCodeFieldProps
> = ({ value, setValue }) => {
	const [codeFieldProps, getCellOnLayout] = useClearByFocusCell({
		value,
		setValue,
	});

	const ref = useBlurOnFulfill({ value, cellCount: 4 });

	return (
		<CodeField
			ref={ref}
			{...codeFieldProps}
			value={value}
			onChangeText={setValue}
			keyboardType="number-pad"
			textContentType="oneTimeCode"
			rootStyle={styles.codeFieldRoot}
			cellCount={4}
			renderCell={({ index, symbol, isFocused }) => (
				<Text
					key={index}
					onLayout={getCellOnLayout(index)}
					style={[styles.cell, focused(isFocused).focusedStyles]}
				>
					{symbol}
				</Text>
			)}
		/>
	);
};
