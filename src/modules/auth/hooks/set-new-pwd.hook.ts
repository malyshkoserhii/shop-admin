import { useForm } from 'react-hook-form';
import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { yupResolver } from '@hookform/resolvers/yup';

import { authService, SetNewPassword } from '../../../services/auth';
import { IResponseMessage, IServerError } from '../../../shared/services/types';
import { NAVIGATION_KEYS, RootStackParamList } from '../../navigation/types';
import { formErrMsg } from '../../../shared/utils';
import { setNewPwdFormSchema } from '../validations';

type UseSetNewPwdProps = {
	email: string;
};

type SetNewPwdFormValues = {
	password: string;
	confirm_password: string;
};

export const useSetNewPwd = ({ email }: UseSetNewPwdProps) => {
	const { control, handleSubmit, setError } = useForm<SetNewPwdFormValues>({
		mode: 'all',
		reValidateMode: 'onChange',
		resolver: yupResolver(setNewPwdFormSchema),
	});

	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const resetPwd = async (
		values: SetNewPassword,
	): Promise<IResponseMessage> => await authService.setNewPassword(values);

	const { mutateAsync, isPending } = useMutation({
		mutationFn: resetPwd,
		onSuccess: (response: IResponseMessage) => {
			navigation.navigate(NAVIGATION_KEYS.SET_NEW_PWD_SUCCESS);
			Toast.show({
				type: 'success',
				text1: response?.message,
			});
		},
		onError: (error: AxiosError<IServerError>) => {
			const errMsg = formErrMsg(error?.response?.data.message);
			setError('password', { message: errMsg });
		},
	});

	const onSubmit = async (values: SetNewPwdFormValues): Promise<void> => {
		await mutateAsync({
			email,
			password: values.password,
		});
	};

	return {
		control,
		handleSubmit,
		isPending,
		onSubmit,
	};
};
