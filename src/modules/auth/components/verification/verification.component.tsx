import * as React from 'react';
import { View, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { styles } from './verification.styles';
import { Layout } from '../../../../shared/components/layout';
import { Header } from '../../../../shared/components/header';
import { ConfirmationCodeField } from '../confirmation-code-filed';
import { Button } from '../../../../shared/components/button';

type VerificationProps = {
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
	onSubmit: () => void;
};

export const Verification: React.FunctionComponent<VerificationProps> = ({
	value,
	setValue,
	onSubmit,
}) => {
	return (
		<KeyboardAwareScrollView
			showsVerticalScrollIndicator={false}
			contentContainerStyle={styles.contentContainer}
		>
			<Layout>
				<View style={styles.container}>
					<View>
						<Header title="Email Verification" />

						<Text style={styles.title}>
							Please type the code from the email
						</Text>

						<ConfirmationCodeField
							value={value}
							setValue={setValue}
						/>
					</View>

					<Button text="Sumbit" onPress={onSubmit} />
				</View>
			</Layout>
		</KeyboardAwareScrollView>
	);
};
