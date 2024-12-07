import * as React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Layout } from '../../../../shared/componetnts/layout';
import { LoginForm } from '../../components/login-form/login-form.component';
import { AuthNav } from '../../components/auth-nav/auth-nav.component';

export const LoginScreen = () => {
	return (
		<KeyboardAwareScrollView
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{ flexGrow: 1 }}
		>
			<Layout>
				<LoginForm />

				<AuthNav
					text="Don’t have an account?"
					btnText="Sign Up"
					onPress={() => {}}
				/>
			</Layout>
		</KeyboardAwareScrollView>
	);
};
