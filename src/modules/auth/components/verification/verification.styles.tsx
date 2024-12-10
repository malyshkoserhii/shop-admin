import { StyleSheet } from 'react-native';

import { COLORS } from '../../../../shared/styles';

export const styles = StyleSheet.create({
	codeFieldRoot: {
		width: 206,
		alignSelf: 'center',
	},
	cell: {
		borderWidth: 1,
		borderRadius: 10,
		paddingHorizontal: 12,
		paddingVertical: 12,
		fontSize: 24,
		width: 44,
		height: 55,
		backgroundColor: COLORS.white,
	},
});

export const focused = (isFocused: boolean) =>
	StyleSheet.create({
		focusedStyles: {
			borderColor: isFocused ? COLORS.blueberry : COLORS.platinum,
		},
	});
