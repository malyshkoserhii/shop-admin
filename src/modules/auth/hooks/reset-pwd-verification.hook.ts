import * as React from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import Toast from 'react-native-toast-message';

import { NAVIGATION_KEYS, RootStackParamList } from '../../navigation/types';
import { authService, VerifyEmailBody } from '../../../services/auth';
import { IResponseMessage, IServerError } from '../../../shared/services/types';
import { formErrMsg } from '../../../shared/utils';

type useResetPwdVerificationProps = {
	email: string;
};

export const useResetPwdVerification = ({
	email,
}: useResetPwdVerificationProps) => {
	const [value, setValue] = React.useState('');
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const verifyResetPwd = async (
		values: VerifyEmailBody,
	): Promise<IResponseMessage> => await authService.verifyResetPwd(values);

	const { mutateAsync, isPending } = useMutation({
		mutationFn: verifyResetPwd,
		onSuccess: (response: IResponseMessage) => {
			navigation.navigate(NAVIGATION_KEYS.SET_NEW_PWD, {
				email,
			});
			Toast.show({
				text1: response?.message,
			});
		},
		onError: (error: AxiosError<IServerError>) => {
			const errMsg = formErrMsg(error?.response?.data.message);
			Toast.show({
				type: 'error',
				text1: errMsg,
			});
		},
	});

	const onSubmit = async () => {
		await mutateAsync({
			email,
			code: Number(value),
		});
	};

	return {
		value,
		setValue,
		isPending,
		onSubmit,
	};
};
