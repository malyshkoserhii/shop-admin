import { Platform, StyleSheet } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';

import { COLORS } from '../../styles/colors';

const android = Platform.OS === 'android';

export const safeAreaStyles = (insets: EdgeInsets, isBottomTab: boolean) => {
	const paddingMeasure = android ? 20 : insets.bottom;

	return StyleSheet.create({
		safeArea: {
			flex: 1,
			paddingTop: android ? 20 : insets.top,
			paddingBottom: isBottomTab ? 0 : paddingMeasure,
			paddingLeft: insets.left,
			paddingRight: insets.right,
		},
	});
};

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.anti_flash_white,
		paddingHorizontal: 16,
	},
});
