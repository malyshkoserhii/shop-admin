import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavContainer } from '../nav-container/nav-container.component';
import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from '../../types/navigation.type';
import { SCREEN_OPTIONS } from '../../constants';
import { LoginScreen } from '../../../auth/screens/login';
import { RegisterScreen } from '../../../auth/screens/register';
import { AuthVerificationScreen } from '../../../auth/screens/auth-verification';
import { RegisterSuccessScreen } from '../../../auth/screens/register-success';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
	const screens = React.useMemo(() => {
		return (
			<>
				<Stack.Screen
					name={NAVIGATION_KEYS.LOGIN}
					component={LoginScreen}
					options={SCREEN_OPTIONS}
				/>
				<Stack.Screen
					name={NAVIGATION_KEYS.REGISTER}
					component={RegisterScreen}
					options={SCREEN_OPTIONS}
				/>
				<Stack.Screen
					name={NAVIGATION_KEYS.AUTH_VERIFICATION}
					component={AuthVerificationScreen}
					options={SCREEN_OPTIONS}
				/>
				<Stack.Screen
					name={NAVIGATION_KEYS.REGISTER_SUCCESS}
					component={RegisterSuccessScreen}
					options={SCREEN_OPTIONS}
				/>
			</>
		);
	}, []);

	return (
		<NavContainer>
			<Stack.Navigator initialRouteName={NAVIGATION_KEYS.LOGIN}>
				{screens}
			</Stack.Navigator>
		</NavContainer>
	);
};
