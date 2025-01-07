import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NAVIGATION_KEYS, RootStackParamList } from '../types/navigation.type';
import { SCREEN_OPTIONS } from './screen-options.consts';
import { LoginScreen } from '../../auth/screens/login';
import { RegisterScreen } from '../../auth/screens/register';
import { AuthVerificationScreen } from '../../auth/screens/auth-verification';
import { RegisterSuccessScreen } from '../../auth/screens/register-success';
import { ForgotPwdScreen } from '../../auth/screens/forgot-pwd';
import { ResetPwdVerificationScreen } from '../../auth/screens/reset-pwd-verification';
import { SetNewPwdScreen } from '../../auth/screens/set-new-pwd';
import { SetNewPwdSuccessScreen } from '../../auth/screens/set-new-pwd-success';

const PublicStack = createNativeStackNavigator<RootStackParamList>();

export const PUBLIC_SCREENS = (
	<>
		<PublicStack.Screen
			name={NAVIGATION_KEYS.LOGIN}
			component={LoginScreen}
			options={SCREEN_OPTIONS}
		/>
		<PublicStack.Screen
			name={NAVIGATION_KEYS.REGISTER}
			component={RegisterScreen}
			options={SCREEN_OPTIONS}
		/>
		<PublicStack.Screen
			name={NAVIGATION_KEYS.AUTH_VERIFICATION}
			component={AuthVerificationScreen}
			options={SCREEN_OPTIONS}
		/>
		<PublicStack.Screen
			name={NAVIGATION_KEYS.REGISTER_SUCCESS}
			component={RegisterSuccessScreen}
			options={SCREEN_OPTIONS}
		/>
		<PublicStack.Screen
			name={NAVIGATION_KEYS.FORGOT_PASSWORD}
			component={ForgotPwdScreen}
			options={SCREEN_OPTIONS}
		/>
		<PublicStack.Screen
			name={NAVIGATION_KEYS.RESET_PASSWORD_VERIFICATION}
			component={ResetPwdVerificationScreen}
			options={SCREEN_OPTIONS}
		/>
		<PublicStack.Screen
			name={NAVIGATION_KEYS.SET_NEW_PWD}
			component={SetNewPwdScreen}
			options={SCREEN_OPTIONS}
		/>
		<PublicStack.Screen
			name={NAVIGATION_KEYS.SET_NEW_PWD_SUCCESS}
			component={SetNewPwdSuccessScreen}
			options={SCREEN_OPTIONS}
		/>
	</>
);
