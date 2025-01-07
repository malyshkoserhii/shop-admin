import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import { registerFormSchema } from '../validations';
import { authService } from '../../../services/auth';
import { IResponseMessage, IServerError } from '../../../shared/services/types';
import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from '../../../modules/navigation/types';
import { formErrMsg } from '../../../shared/utils';

type RegisterFormValues = {
	email: string;
	full_name: string;
	password: string;
	confirm_password: string;
};

export const useRegister = () => {
	const { control, handleSubmit, setError, getValues } =
		useForm<RegisterFormValues>({
			mode: 'all',
			reValidateMode: 'onChange',
			resolver: yupResolver(registerFormSchema),
		});

	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const signup = async (
		values: RegisterFormValues,
	): Promise<IResponseMessage> => await authService.signup(values);

	const { mutateAsync, isPending } = useMutation({
		mutationFn: signup,
		onSuccess: (response: IResponseMessage) => {
			navigation.navigate(NAVIGATION_KEYS.AUTH_VERIFICATION, {
				email: getValues().email,
			});
			Toast.show({
				type: 'success',
				text1: response?.message,
			});
		},
		onError: (error: AxiosError<IServerError>) => {
			const errMsg = formErrMsg(error?.response?.data.message);
			setError('email', { message: errMsg });
		},
	});

	const onSignUp = async (values: RegisterFormValues): Promise<void> => {
		await mutateAsync(values);
	};

	return {
		control,
		handleSubmit,
		isPending,
		onSignUp,
	};
};
