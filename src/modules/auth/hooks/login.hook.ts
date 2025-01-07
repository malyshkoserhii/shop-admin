import { useForm } from 'react-hook-form';
import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { yupResolver } from '@hookform/resolvers/yup';

import { SignInResponse, authService } from '../../../services/auth';
import { HttpStatusCode, IServerError } from '../../../shared/services/types';
import { useAuthStore } from '../../../store/auth.store';
import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from '../../../modules/navigation/types';
import { formErrMsg } from '../../../shared/utils';
import { loginFormSchema } from '../validations';

type LoginFormValues = {
	email: string;
	password: string;
};

export const useLogin = () => {
	const setAuth = useAuthStore((state) => state.setAuth);
	const setTokens = useAuthStore((state) => state.setTokens);

	const { control, handleSubmit, setError, getValues } =
		useForm<LoginFormValues>({
			mode: 'all',
			reValidateMode: 'onChange',
			resolver: yupResolver(loginFormSchema),
		});

	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const signin = async (values: LoginFormValues): Promise<SignInResponse> =>
		await authService.signin(values);

	const { mutateAsync, isPending } = useMutation({
		mutationFn: signin,
		onSuccess: (response: SignInResponse) => {
			setAuth(true);
			setTokens(response);
		},
		onError: (error: AxiosError<IServerError>) => {
			const emailNotVerirfied =
				error.response?.data?.statusCode === HttpStatusCode.NOT_FOUND;

			if (emailNotVerirfied) {
				navigation.navigate(NAVIGATION_KEYS.AUTH_VERIFICATION, {
					email: getValues().email,
				});

				const errMsg = formErrMsg(error.response?.data?.message);

				Toast.show({
					type: 'success',
					text1: errMsg,
				});
				return;
			}

			setError('password', { message: error?.response?.data.message });
		},
	});

	const onLoginClick = async (values: LoginFormValues): Promise<void> => {
		await mutateAsync(values);
	};

	const navForgotPwd = () =>
		navigation.navigate(NAVIGATION_KEYS.FORGOT_PASSWORD);

	return {
		control,
		handleSubmit,
		isPending,
		onLoginClick,
		navForgotPwd,
	};
};
