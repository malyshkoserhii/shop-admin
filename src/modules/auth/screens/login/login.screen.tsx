import * as React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { useNavigation, NavigationProp } from '@react-navigation/native';

import { Layout } from '../../../../shared/components/layout';
import { LoginForm } from '../../components/login-form/login-form.component';
import { AuthNav } from '../../components/auth-nav/auth-nav.component';
import { Header } from '../../../../shared/components/header';
import { NAVIGATION_KEYS, RootStackParamList } from '../../../navigation/types';

export const LoginScreen = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const navSignIn = () => navigation.navigate(NAVIGATION_KEYS.REGISTER);

	return (
		<KeyboardAwareScrollView
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{ flexGrow: 1 }}
		>
			<Layout>
				<Header title="Sign In" />

				<LoginForm />

				<AuthNav
					text="Don’t have an account?"
					btnText="Sign Up"
					onPress={navSignIn}
				/>
			</Layout>
		</KeyboardAwareScrollView>
	);
};
