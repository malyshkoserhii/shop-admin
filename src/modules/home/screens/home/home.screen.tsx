import React from 'react';
import { Text } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { Layout } from '../../../../shared/components/layout';
import { User, userService } from '../../../../services/user';
import { Button } from '../../../../shared/components/button';
import { NAVIGATION_KEYS, RootStackParamList } from '../../../navigation/types';

export const HomeScreen = () => {
	const [user, setUser] = React.useState<User | null>(null);

	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const navTest = () => navigation.navigate(NAVIGATION_KEYS.TEST);

	const getMe = async () => {
		try {
			const response = await userService.getMe();
			if (response) {
				setUser(response);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Layout>
			<Text>Home Screen</Text>

			<Text style={{ marginTop: 20 }}>{user && user.email}</Text>

			<Button
				text="Get Me"
				onPress={getMe}
				extraBtnStyles={{ marginTop: 20 }}
			/>

			<Button
				text="Go to Test Screen"
				onPress={navTest}
				extraBtnStyles={{ marginTop: 20 }}
			/>
		</Layout>
	);
};
