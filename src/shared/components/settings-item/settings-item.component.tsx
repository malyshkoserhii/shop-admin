import * as React from 'react';
import {
	StyleProp,
	Text,
	TextStyle,
	TouchableOpacity,
	ViewStyle,
} from 'react-native';

import { styles } from './settings-item.styles';

type SettingsItemProps = {
	icon: React.ReactNode;
	text: string;
	onPress: () => void;
	extraStyles?: StyleProp<ViewStyle>;
	extraTextStyles?: StyleProp<TextStyle>;
};

export const SettingsItem: React.FunctionComponent<SettingsItemProps> = ({
	icon,
	text,
	onPress,
	extraStyles = {},
	extraTextStyles = {},
}) => {
	return (
		<TouchableOpacity
			style={[styles.container, extraStyles]}
			onPress={onPress}
		>
			{icon}
			<Text style={[styles.text, extraTextStyles]}>{text}</Text>
		</TouchableOpacity>
	);
};
