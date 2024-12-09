import * as React from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { styles } from './register-form.styles';
import { Input } from '../../../../shared/components/input';
import { Button } from '../../../../shared/components/button';
import { registerFormSchema } from '../../validations';

type RegisterFormValues = {
	email: string;
	full_name: string;
	phone_number: string;
	shipping_address: string;
	password: string;
	confirm_password: string;
};

export const RegisterForm = () => {
	const { control, handleSubmit } = useForm<RegisterFormValues>({
		mode: 'all',
		reValidateMode: 'onChange',
		resolver: yupResolver(registerFormSchema),
	});

	const onSignUp = (values: RegisterFormValues) => {
		console.log('🚀 ~ onSignUp ~ values:', values);
	};

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
					name="full_name"
					control={control}
					label="Full Name"
					defaultValue=""
				/>

				<Input
					name="phone_number"
					control={control}
					label="Phone Number"
					defaultValue=""
				/>

				<Input
					name="shipping_address"
					control={control}
					label="Shipping Address"
					defaultValue=""
				/>

				<Input
					name="password"
					control={control}
					label="Password"
					defaultValue=""
				/>

				<Input
					name="confirm_password"
					control={control}
					label="Confirm Password"
					defaultValue=""
				/>
			</View>

			<Button text="Sign Up" onPress={handleSubmit(onSignUp)} />
		</View>
	);
};
