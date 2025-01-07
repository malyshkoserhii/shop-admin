import * as React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Verification } from '../../components/verification';
import { NAVIGATION_KEYS, RootStackParamList } from '../../../navigation/types';
import { useAuthVerification } from '../../hooks';

type AuthVerificationScreenProps = NativeStackScreenProps<
	RootStackParamList,
	NAVIGATION_KEYS.AUTH_VERIFICATION
>;

export const AuthVerificationScreen = ({
	route,
}: AuthVerificationScreenProps) => {
	const { value, setValue, isPending, onSubmit } = useAuthVerification({
		email: route?.params?.email,
	});

	return (
		<Verification
			value={value}
			setValue={setValue}
			onSubmit={onSubmit}
			headerText="Email Verification"
			loading={isPending}
		/>
	);
};
