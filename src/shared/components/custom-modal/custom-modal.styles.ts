import { Dimensions, StyleSheet } from 'react-native';

import { COLORS } from '../../../shared/styles';

export const styles = StyleSheet.create({
	modal: {
		margin: 0,
		justifyContent: 'flex-end',
	},
	contentWrapper: {
		maxHeight: Dimensions.get('window').height * 0.9,
		paddingTop: 16,
		paddingBottom: 32,
		backgroundColor: COLORS.white,
		borderTopLeftRadius: 32,
		borderTopRightRadius: 32,
	},
	childrenWrapper: {
		paddingTop: 16,
		paddingHorizontal: 24,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	titleWrapper: {
		position: 'relative',
		flexDirection: 'row',
		alignItems: 'center',
	},
	crossBtn: {
		position: 'relative',
		top: 0,
		left: 10,
		width: 40,
		height: 40,
	},
	title: {
		flex: 1,
		position: 'relative',
		left: -18,
		paddingHorizontal: 24,
		color: COLORS.black,
		fontSize: 20,
		lineHeight: 24,
		textAlign: 'center',
	},
	closeBlock: {
		flexDirection: 'row',
		paddingHorizontal: 24,
	},
	closeTitle: {
		marginLeft: 12,
		color: COLORS.black,
		fontSize: 26,
		lineHeight: 34,
		textTransform: 'capitalize',
	},
});
