import { StyleProp, View, ViewStyle } from 'react-native';

import { styles } from './input-section.styles';

type InputSectionProps = {
	children: React.ReactNode;
	extraStyles?: StyleProp<ViewStyle>;
};

export const InputSection: React.FunctionComponent<InputSectionProps> = ({
	children,
	extraStyles = {},
}) => {
	return <View style={[styles.section, extraStyles]}>{children}</View>;
};
