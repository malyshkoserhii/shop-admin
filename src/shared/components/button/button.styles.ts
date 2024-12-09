import { StyleSheet } from 'react-native';

import { COLORS } from '../../../shared/styles';

export const styles = StyleSheet.create({
	button: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 12,
		borderRadius: 10,
		backgroundColor: COLORS.blueberry,
	},
	text: {
		fontSize: 22,
		lineHeight: 26,
		color: COLORS.white,
	},
	disabledBtn: {
		backgroundColor: COLORS.dark_grey,
	},
	disabledText: {
		color: COLORS.white,
	},
	content: {
		flexDirection: 'row',
	},
	iconWrapper: {
		marginRight: 8,
	},
});
