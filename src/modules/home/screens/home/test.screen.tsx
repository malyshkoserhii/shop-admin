import { NavigationProp, useNavigation } from '@react-navigation/native';

import { Success } from '../../../../shared/components/success';
import { NAVIGATION_KEYS, RootStackParamList } from '../../../navigation/types';

export const TestScreen = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const navHome = () => navigation.navigate(NAVIGATION_KEYS.BOTTOM_TABS);

	return (
		<Success
			text="I am a Test Screen"
			btnText="Go Home"
			onPress={navHome}
		/>
	);
};
