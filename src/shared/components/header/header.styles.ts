import { StyleSheet } from 'react-native';

import { COLORS } from '../../../shared/styles';

export const styles = StyleSheet.create({
	container: {
		position: 'relative',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 30,
		height: 40,
	},
	titleBox: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 16,
	},
	title: {
		fontSize: 20,
		color: COLORS.black,
		textAlign: 'center',
	},
	pressarableIcon: {
		position: 'absolute',
		zIndex: 10,
		top: 0,
		left: 0,
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
