import { StyleSheet } from 'react-native';

import { COLORS } from '../../../../shared/styles';

export const styles = StyleSheet.create({
	contentContainer: {
		flexGrow: 1,
	},
	container: {
		flex: 1,
		justifyContent: 'space-between',
	},
	title: {
		color: COLORS.sonic_silver,
		fontSize: 14,
		textAlign: 'center',
		marginBottom: 50,
	},
});
