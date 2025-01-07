import * as React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { useNavigation, NavigationProp } from '@react-navigation/native';

import { Layout } from '../../../../shared/components/layout';
import { AuthNav } from '../../components/auth-nav/auth-nav.component';
import { Header } from '../../../../shared/components/header';
import { NAVIGATION_KEYS, RootStackParamList } from '../../../navigation/types';
import { ForgotPasswordForm } from '../../components/forgot-pwd-form';

export const ForgotPwdScreen = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const navSignIn = () => navigation.navigate(NAVIGATION_KEYS.REGISTER);

	const navBack = () => navigation.goBack();

	return (
		<KeyboardAwareScrollView
			contentContainerStyle={{ flexGrow: 1 }}
			extraScrollHeight={20}
			enableOnAndroid={true}
			keyboardShouldPersistTaps="handled"
		>
			<Layout>
				<Header title="Forgot password" onArrowPress={navBack} />

				<ForgotPasswordForm />
			</Layout>
		</KeyboardAwareScrollView>
	);
};
