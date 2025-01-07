import * as React from 'react';
import { View, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { styles } from './verification.styles';
import { Layout } from '../../../../shared/components/layout';
import { Header } from '../../../../shared/components/header';
import { ConfirmationCodeField } from '../confirmation-code-filed';
import { Button } from '../../../../shared/components/button';
import { InputSection } from '../input-section';

type VerificationProps = {
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
	onSubmit: () => Promise<void>;
	headerText: string;
	loading?: boolean;
	onArrowPress?: () => void;
};

export const Verification: React.FunctionComponent<VerificationProps> = ({
	value,
	setValue,
	onSubmit,
	headerText,
	loading,
	onArrowPress,
}) => {
	return (
		<KeyboardAwareScrollView
			showsVerticalScrollIndicator={false}
			contentContainerStyle={styles.contentContainer}
			extraScrollHeight={20}
			enableOnAndroid={true}
			keyboardShouldPersistTaps="handled"
		>
			<Layout>
				<View style={styles.container}>
					<InputSection>
						<Header
							title={headerText}
							onArrowPress={onArrowPress}
						/>

						<Text style={styles.title}>
							Please type the code from the email
						</Text>

						<ConfirmationCodeField
							value={value}
							setValue={setValue}
						/>
					</InputSection>

					<Button
						text="Sumbit"
						onPress={onSubmit}
						loading={loading}
						extraBtnStyles={{ marginTop: 30 }}
					/>
				</View>
			</Layout>
		</KeyboardAwareScrollView>
	);
};
