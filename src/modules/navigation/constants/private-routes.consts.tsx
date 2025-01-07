import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NAVIGATION_KEYS, RootStackParamList } from '../types/navigation.type';
import { SCREEN_OPTIONS } from './screen-options.consts';
import { BottomTabs } from '../components/bottom-tab/bottom-tab.component';
import { TestScreen } from '../../../modules/home/screens/home';

const PrivateStack = createNativeStackNavigator<RootStackParamList>();

export const PRIVATE_SCREENS = (
	<>
		<PrivateStack.Screen
			name={NAVIGATION_KEYS.BOTTOM_TABS}
			component={BottomTabs}
			options={SCREEN_OPTIONS}
		/>

		<PrivateStack.Screen
			name={NAVIGATION_KEYS.TEST}
			component={TestScreen}
			options={SCREEN_OPTIONS}
		/>
	</>
);
