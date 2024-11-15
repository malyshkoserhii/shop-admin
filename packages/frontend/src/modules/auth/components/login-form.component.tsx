import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';

import { Input } from '~shared/components/input';
import { formStyles, inputSection } from './login-form.styles';
import Button from '~shared/components/button/button.component';
import { useAuthStore } from '~store/auth.store';
import { QUERY_KEYS } from '~shared/keys';
import { authService } from '~/services';
import { SignInResponse } from '~/services/auth.types';
import { AxiosError } from 'axios';
import { IServerError } from '~shared/services/types';

type LoginFormValues = {
	email: string;
	password: string;
};

export const LoginForm = (): React.ReactNode => {
	const setAuth = useAuthStore((state) => state.setAuth);
	const setTokens = useAuthStore((state) => state.setTokens);

	const { control, handleSubmit, setError } = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const signin = async (values: LoginFormValues): Promise<SignInResponse> =>
		await authService.signin(values);

	const { mutateAsync, isPending } = useMutation({
		mutationKey: [QUERY_KEYS.AUTH],
		mutationFn: signin,
		onSuccess: (response: SignInResponse) => {
			console.log('here');
			setAuth(true);
			setTokens(response);
		},
		onError: (error: AxiosError<IServerError>) => {
			setError('password', { message: error.response.data.message });
		},
	});

	const onLoginClick = async (values: LoginFormValues): Promise<void> => {
		await mutateAsync(values);
	};

	return (
		<form onSubmit={handleSubmit(onLoginClick)} className={formStyles}>
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

			<Button
				text="Login"
				intent="primary"
				props={{ type: 'submit', loading: isPending }}
			/>
		</form>
	);
};
