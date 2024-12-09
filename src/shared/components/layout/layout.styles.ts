import { StyleSheet } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';

import { COLORS } from '../../styles/colors';

export const safeAreaStyles = (insets: EdgeInsets) =>
	StyleSheet.create({
		safeArea: {
			flex: 1,
			paddingTop: insets.top,
			paddingBottom: insets.bottom,
			paddingLeft: insets.left,
			paddingRight: insets.right,
		},
	});

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.anti_flash_white,
		paddingHorizontal: 16,
	},
});
