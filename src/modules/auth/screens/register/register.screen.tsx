import * as React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { Layout } from '../../../../shared/components/layout';
import { AuthNav } from '../../components/auth-nav';
import { RegisterForm } from '../../components/register-form';
import { Header } from '../../../../shared/components/header';
import { NAVIGATION_KEYS, RootStackParamList } from '../../../navigation/types';

export const RegisterScreen = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const navSignIn = () => navigation.navigate(NAVIGATION_KEYS.LOGIN);

	return (
		<KeyboardAwareScrollView
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{ flexGrow: 1 }}
		>
			<Layout>
				<Header title="Sign Up" />

				<RegisterForm />

				<AuthNav
					text="Have you already registered?"
					btnText="Sign In"
					onPress={navSignIn}
				/>
			</Layout>
		</KeyboardAwareScrollView>
	);
};
