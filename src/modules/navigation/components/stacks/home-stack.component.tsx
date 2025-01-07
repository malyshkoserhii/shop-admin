import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NAVIGATION_KEYS, RootStackParamList } from '../../types';
import { SCREEN_OPTIONS } from '../../constants/screen-options.consts';
import { HomeScreen } from '../../../home/screens/home';

export const HomeStack = createNativeStackNavigator<RootStackParamList>();

export const HomeStackScreens = () => {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen
				name={NAVIGATION_KEYS.HOME}
				component={HomeScreen}
				options={SCREEN_OPTIONS}
			/>
		</HomeStack.Navigator>
	);
};
