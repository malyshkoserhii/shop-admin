import * as React from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { Verification } from '../../components/verification';
import { NAVIGATION_KEYS, RootStackParamList } from '../../../navigation/types';

export const AuthVerificationScreen = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const navSignIn = () => navigation.navigate(NAVIGATION_KEYS.LOGIN);
	return <Verification />;
};
