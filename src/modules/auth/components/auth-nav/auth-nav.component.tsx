import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './auth-nav.styles';

type AuthNavProps = {
	text: string;
	btnText: string;
	onPress: () => void;
};

export const AuthNav: React.FunctionComponent<AuthNavProps> = ({
	btnText,
	text,
	onPress,
}) => {
	return (
		<View style={styles.container}>
			<View style={styles.box}>
				<Text style={styles.text}>{text}</Text>
				<TouchableOpacity onPress={onPress}>
					<Text style={styles.btn}>{btnText}</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};
