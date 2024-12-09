import * as React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Layout } from '../../../../shared/components/layout';
import { AuthNav } from '../../components/auth-nav';
import { RegisterForm } from '../../components/register-form';

export const RegisterScreen = () => {
	return (
		<KeyboardAwareScrollView
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{ flexGrow: 1 }}
		>
			<Layout>
				<RegisterForm />

				<AuthNav
					text="Don’t have an account?"
					btnText="Sign Up"
					onPress={() => {}}
				/>
			</Layout>
		</KeyboardAwareScrollView>
	);
};
