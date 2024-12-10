import * as React from 'react';
import { Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
	CodeField,
	useBlurOnFulfill,
	useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import { styles, focused } from './verification.styles';
import { Layout } from '../../../../shared/components/layout';
import { Header } from '../../../../shared/components/header';

export const Verification = () => {
	const [value, setValue] = React.useState('');
	const [codeFieldProps, getCellOnLayout] = useClearByFocusCell({
		value,
		setValue,
	});

	const ref = useBlurOnFulfill({ value, cellCount: 4 });

	return (
		<KeyboardAwareScrollView
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{ flexGrow: 1, backgroundColor: 'green' }}
		>
			<Layout>
				<Header title="Email Verification" />

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
							style={[
								styles.cell,
								focused(isFocused).focusedStyles,
							]}
						>
							{symbol}
						</Text>
					)}
				/>
			</Layout>
		</KeyboardAwareScrollView>
	);
};
