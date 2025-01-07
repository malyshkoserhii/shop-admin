import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeIcon from '../../../../assets/icons/home';
import SettingsIcon from '../../../../assets/icons/settings';

import { COLORS } from '../../../../shared/styles';
import { NAVIGATION_KEYS } from '../../types';
import { HomeStackScreens, SettingStackScreens } from '../stacks';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: COLORS.blueberry,
				tabBarInactiveTintColor: COLORS.black,
			}}
		>
			<Tab.Screen
				name={NAVIGATION_KEYS.HOME_STACK}
				component={HomeStackScreens}
				options={{
					title: '',
					tabBarLabel: 'Home',
					tabBarIcon: ({ color }) => <HomeIcon fill={color} />,
				}}
			/>
			<Tab.Screen
				name={NAVIGATION_KEYS.SETTINGS_STACK}
				component={SettingStackScreens}
				options={{
					title: '',
					tabBarLabel: 'Settings',
					tabBarIcon: ({ color }) => <SettingsIcon stroke={color} />,
				}}
			/>
		</Tab.Navigator>
	);
};
