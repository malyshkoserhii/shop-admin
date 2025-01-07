import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './login-form.styles';
import { Input } from '../../../../shared/components/input';
import { Button } from '../../../../shared/components/button';
import { useLogin } from '../../hooks';
import { InputSection } from '../input-section';

export const LoginForm = () => {
	const { control, handleSubmit, isPending, onLoginClick, navForgotPwd } =
		useLogin();

	return (
		<View style={styles.form}>
			<InputSection>
				<Input
					name="email"
					control={control}
					label="Email"
					defaultValue=""
					keyboardType="email-address"
				/>

				<Input
					name="password"
					control={control}
					label="Password"
					defaultValue=""
					secureTextEntry={true}
				/>

				<TouchableOpacity onPress={navForgotPwd}>
					<Text style={styles.forgotPwd}>Forgot password</Text>
				</TouchableOpacity>
			</InputSection>

			<Button
				text="Sign in"
				onPress={handleSubmit(onLoginClick)}
				loading={isPending}
			/>
		</View>
	);
};
