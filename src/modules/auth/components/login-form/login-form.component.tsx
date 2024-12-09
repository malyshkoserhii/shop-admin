import * as React from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';

import { styles } from './login-form.styles';
import { Input } from '../../../../shared/components/input';
import { Button } from '../../../../shared/components/button';

type LoginFormValues = {
	email: string;
	password: string;
};

export const LoginForm = () => {
	const { control, handleSubmit } = useForm<LoginFormValues>({
		mode: 'all',
		reValidateMode: 'onChange',
	});

	const onSignIn = (values: LoginFormValues) => {};

	return (
		<View style={styles.form}>
			<View>
				<Input
					name="email"
					control={control}
					label="Email"
					defaultValue=""
				/>

				<Input
					name="password"
					control={control}
					label="Password"
					defaultValue=""
				/>
			</View>

			<Button text="Sign in" onPress={handleSubmit(onSignIn)} />
		</View>
	);
};
