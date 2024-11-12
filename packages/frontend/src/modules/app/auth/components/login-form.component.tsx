import * as React from 'react';
import { useForm } from 'react-hook-form';

import { Input } from '~shared/components/input';
import { formStyles, inputSection } from './login-form.styles';
import Button from '~shared/components/button/button.component';

export const LoginForm = (): React.ReactNode => {
	const { control, handleSubmit } = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
	});

	return (
		<form
			onSubmit={handleSubmit((values) => console.log(values))}
			className={formStyles}
		>
			<Input
				control={control}
				name="email"
				rules={{ required: { value: true, message: 'Required' } }}
				label="Email"
			/>

			<Input
				control={control}
				name="password"
				rules={{ required: { value: true, message: 'Required' } }}
				label="Password"
				extraInputSectionStyles={inputSection}
			/>

			<Button text="Login" intent="primary" props={{ type: 'submit' }} />
		</form>
	);
};
