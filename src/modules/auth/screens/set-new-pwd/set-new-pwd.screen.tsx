import * as React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Layout } from '../../../../shared/components/layout';
import { Header } from '../../../../shared/components/header';
import { NAVIGATION_KEYS, RootStackParamList } from '../../../navigation/types';
import { SetNewPasswordForm } from '../../components/set-new-pwd-form';

type SetNewPwdScreenProps = NativeStackScreenProps<
	RootStackParamList,
	NAVIGATION_KEYS.SET_NEW_PWD
>;

export const SetNewPwdScreen = ({ route }: SetNewPwdScreenProps) => {
	return (
		<KeyboardAwareScrollView
			contentContainerStyle={{ flexGrow: 1 }}
			extraScrollHeight={20}
			enableOnAndroid={true}
			keyboardShouldPersistTaps="handled"
		>
			<Layout>
				<Header title="Set new password" />

				<SetNewPasswordForm email={route?.params?.email} />
			</Layout>
		</KeyboardAwareScrollView>
	);
};
