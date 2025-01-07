import * as React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Verification } from '../../components/verification';
import { NAVIGATION_KEYS, RootStackParamList } from '../../../navigation/types';
import { useResetPwdVerification } from '../../hooks';

type ResetPwdVerificationScreenProps = NativeStackScreenProps<
	RootStackParamList,
	NAVIGATION_KEYS.RESET_PASSWORD_VERIFICATION
>;

export const ResetPwdVerificationScreen = ({
	route,
}: ResetPwdVerificationScreenProps) => {
	const { value, setValue, isPending, onSubmit } = useResetPwdVerification({
		email: route?.params?.email,
	});

	return (
		<Verification
			value={value}
			setValue={setValue}
			onSubmit={onSubmit}
			headerText="Reset password verification"
			loading={isPending}
		/>
	);
};
