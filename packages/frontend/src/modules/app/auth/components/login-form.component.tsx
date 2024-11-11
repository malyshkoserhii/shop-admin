import { Button } from '@blueprintjs/core';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '~shared/components/input/input.component';

export const LoginForm = (): React.ReactNode => {
	const { control, handleSubmit } = useForm({
		defaultValues: {
			email: '',
		},
	});

	return (
		<form onSubmit={handleSubmit((values) => console.log(values))}>
			<Input
				control={control}
				name="email"
				rules={{ required: { value: true, message: 'Required' } }}
			/>

			<Button type="submit" text="Login" intent="primary" />
		</form>
	);
};
