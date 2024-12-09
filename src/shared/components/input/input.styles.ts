import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/colors';

export const styles = StyleSheet.create({
	container: {
		position: 'relative',
		paddingBottom: 20,
		marginBottom: 10,
	},
	input: {
		width: '100%',
		paddingLeft: 20,
		paddingRight: 20,
		paddingVertical: 12,
		fontSize: 16,
		backgroundColor: COLORS.white,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: COLORS.platinum,
	},
	label: {
		marginBottom: 6,
		fontSize: 14,
		color: COLORS.sonic_silver,
	},
	focused: {
		borderWidth: 1,
		borderColor: COLORS.blueberry,
	},
	wrong: {
		borderWidth: 1,
		borderColor: COLORS.red,
	},
	correct: {
		borderWidth: 1,
	},
});
