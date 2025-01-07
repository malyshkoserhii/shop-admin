import * as React from 'react';
import { ScrollView, StyleProp, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { safeAreaStyles, styles } from './layout.styles';

type LayoutProps = {
	children: React.ReactNode;
	scrolable?: boolean;
	extraSafeAreaStyles?: StyleProp<ViewStyle>;
};

export const Layout: React.FunctionComponent<LayoutProps> = ({
	children,
	scrolable = false,
	extraSafeAreaStyles,
}) => {
	const insets = useSafeAreaInsets();

	return (
		<View style={styles.container}>
			{scrolable ? (
				<ScrollView>
					<View
						style={[
							safeAreaStyles(insets).safeArea,
							extraSafeAreaStyles,
						]}
					>
						{children}
					</View>
				</ScrollView>
			) : (
				<View
					style={[
						safeAreaStyles(insets).safeArea,
						extraSafeAreaStyles,
					]}
				>
					{children}
				</View>
			)}
		</View>
	);
};
