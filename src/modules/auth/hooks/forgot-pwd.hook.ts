import { useForm } from 'react-hook-form';
import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { yupResolver } from '@hookform/resolvers/yup';

import { authService } from '../../../services/auth';
import { IResponseMessage, IServerError } from '../../../shared/services/types';
import { NAVIGATION_KEYS, RootStackParamList } from '../../navigation/types';
import { formErrMsg } from '../../../shared/utils';
import { forgotPwdFormSchema } from '../validations';

type ForgotPwdFormValues = {
	email: string;
};

export const useForgotPwd = () => {
	const { control, handleSubmit, setError, getValues } =
		useForm<ForgotPwdFormValues>({
			mode: 'all',
			reValidateMode: 'onChange',
			resolver: yupResolver(forgotPwdFormSchema),
		});

	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const resetPwd = async (
		values: ForgotPwdFormValues,
	): Promise<IResponseMessage> => await authService.resetPwd(values);

	const { mutateAsync, isPending } = useMutation({
		mutationFn: resetPwd,
		onSuccess: (response: IResponseMessage) => {
			navigation.navigate(NAVIGATION_KEYS.RESET_PASSWORD_VERIFICATION, {
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

	const onSubmit = async (values: ForgotPwdFormValues): Promise<void> => {
		await mutateAsync(values);
	};

	return {
		control,
		handleSubmit,
		isPending,
		onSubmit,
	};
};
