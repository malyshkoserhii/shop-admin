import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { safeAreaStyles, styles } from './layout.styles';

type LayoutProps = {
	children: React.ReactNode;
	extraSafeAreaStyles?: StyleProp<ViewStyle>;
};

export const Layout: React.FunctionComponent<LayoutProps> = ({
	children,
	extraSafeAreaStyles,
}) => {
	const insets = useSafeAreaInsets();

	return (
		<View style={styles.container}>
			<View
				style={[safeAreaStyles(insets).safeArea, extraSafeAreaStyles]}
			>
				{children}
			</View>
		</View>
	);
};
