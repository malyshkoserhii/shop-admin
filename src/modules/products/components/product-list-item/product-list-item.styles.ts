import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../../shared/styles';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
		marginBottom: 15,
		borderWidth: 1,
		borderColor: COLORS.sonic_silver,
		borderRadius: 10,
	},
	text: {
		fontSize: 16,
		fontFamily: FONTS.PoppinsRegular,
		lineHeight: 24,
	},
	category: {
		fontSize: 16,
		fontFamily: FONTS.PoppinsSemiBold,
		lineHeight: 26,
	},
	textWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	mb: {
		marginBottom: 10,
	},
});
