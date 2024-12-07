import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../shared/styles';

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		alignItems: 'center',
		marginTop: 40,
	},
	box: {
		flexDirection: 'row',
	},
	text: {
		color: COLORS.black,
		fontSize: 16,
		marginRight: 4,
	},
	btn: {
		color: COLORS.blueberry,
		fontSize: 16,
	},
});
