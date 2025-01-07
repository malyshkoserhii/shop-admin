import * as React from 'react';
import { Text, View } from 'react-native';

import { styles } from './forgot-pwd-form.styles';
import { Input } from '../../../../shared/components/input';
import { Button } from '../../../../shared/components/button';
import { useForgotPwd } from '../../hooks';
import { InputSection } from '../input-section';

export const ForgotPasswordForm = () => {
	const { control, handleSubmit, isPending, onSubmit } = useForgotPwd();

	return (
		<View style={styles.form}>
			<InputSection>
				<Text style={styles.title}>
					Please enter your email to reset your password
				</Text>

				<Input
					name="email"
					control={control}
					label="Email"
					defaultValue=""
					keyboardType="email-address"
				/>
			</InputSection>

			<Button
				text="Submit"
				onPress={handleSubmit(onSubmit)}
				loading={isPending}
			/>
		</View>
	);
};
