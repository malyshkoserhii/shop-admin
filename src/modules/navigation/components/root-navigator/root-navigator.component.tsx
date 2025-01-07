import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavContainer } from '../nav-container/nav-container.component';
import { RootStackParamList } from '../../types/navigation.type';
import { PRIVATE_SCREENS, PUBLIC_SCREENS } from '../../constants';
import { useAuthStore } from '../../../../store/auth.store';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
	const auth = useAuthStore((state) => state.auth);

	return (
		<NavContainer>
			<Stack.Navigator>
				{auth ? PRIVATE_SCREENS : PUBLIC_SCREENS}
			</Stack.Navigator>
		</NavContainer>
	);
};
