import * as React from 'react';
import { Text, View } from 'react-native';

import { styles } from './register-form.styles';
import { Input } from '../../../../shared/components/input';
import { Button } from '../../../../shared/components/button';
import { useRegister } from '../../hooks';
import { InputSection } from '../input-section';

export const RegisterForm = () => {
	const { control, handleSubmit, isPending, onSignUp } = useRegister();

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
					name="full_name"
					control={control}
					label="Full Name"
					defaultValue=""
				/>

				<Text style={styles.title}>
					Password should contain 8 symbols and include capital
					letter, one digit and one special symbol
				</Text>

				<Input
					name="password"
					control={control}
					label="Password"
					defaultValue=""
					// secureTextEntry={true}
				/>

				<Input
					name="confirm_password"
					control={control}
					label="Confirm Password"
					defaultValue=""
					// secureTextEntry={true}
				/>
			</InputSection>

			<Button
				text="Sign Up"
				onPress={handleSubmit(onSignUp)}
				loading={isPending}
			/>
		</View>
	);
};
