import React from 'react';
import { Text } from 'react-native';

import { Layout } from '../../../../shared/components/layout';
import { User, userService } from '../../../../services/user';
import { Button } from '../../../../shared/components/button';

export const HomeScreen = () => {
	const [user, setUser] = React.useState<User | null>(null);

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
		</Layout>
	);
};
