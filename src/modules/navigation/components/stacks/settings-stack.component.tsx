import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NAVIGATION_KEYS, RootStackParamList } from '../../types';
import { SCREEN_OPTIONS } from '../../constants/screen-options.consts';
import { SettingsScreen } from '../../../settings/screens/settings';

export const SettingsStack = createNativeStackNavigator<RootStackParamList>();

export const SettingStackScreens = () => {
	return (
		<SettingsStack.Navigator>
			<SettingsStack.Screen
				name={NAVIGATION_KEYS.SETTINGS}
				component={SettingsScreen}
				options={SCREEN_OPTIONS}
			/>
		</SettingsStack.Navigator>
	);
};
