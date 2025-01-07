import * as React from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { NAVIGATION_KEYS, RootStackParamList } from '../../../navigation/types';
import { Success } from '../../../../shared/components/success';

export const SetNewPwdSuccessScreen = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const navSignIn = () => navigation.navigate(NAVIGATION_KEYS.LOGIN);

	return (
		<Success
			text="New pasword has been set successfully"
			btnText="Sign In"
			onPress={navSignIn}
		/>
	);
};
