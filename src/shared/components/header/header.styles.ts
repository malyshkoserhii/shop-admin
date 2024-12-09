import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../themes';

export const styles = StyleSheet.create({
	container: {
		position: 'relative',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 30,
		backgroundColor: 'transparent',
	},
	titleBox: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 16,
	},
	title: {
		marginTop: 30,
		fontSize: 32,
		fontFamily: FONTS.Montserrat.semiBold,
		color: COLORS.eerieBlack,
		textAlign: 'center',
	},
	pressarableIcon: {
		position: 'absolute',
		zIndex: 10,
		top: 10,
		left: 10,
		width: 40,
		height: 40,
		justifyContent: 'center',
	},
	rightButtonWrapper: {
		position: 'absolute',
		zIndex: 10,
		width: 40,
		height: 40,
		flexDirection: 'row',
		alignItems: 'center',
	},
	dummy: {
		position: 'absolute',
		zIndex: 10,
		width: 40,
		height: 40,
	},
});
