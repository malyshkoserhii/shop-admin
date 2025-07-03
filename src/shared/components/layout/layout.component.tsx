import * as React from 'react';
import { ScrollView, StyleProp, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { safeAreaStyles, styles } from './layout.styles';

type LayoutProps = {
	children: React.ReactNode;
	scrolable?: boolean;
	extraSafeAreaStyles?: StyleProp<ViewStyle>;
	isBottomTab?: boolean;
};

export const Layout: React.FunctionComponent<LayoutProps> = ({
	children,
	scrolable = false,
	extraSafeAreaStyles,
	isBottomTab = false,
}) => {
	const insets = useSafeAreaInsets();

	return (
		<View style={styles.container}>
			{scrolable ? (
				<ScrollView>
					<View
						style={[
							safeAreaStyles(insets, isBottomTab).safeArea,
							extraSafeAreaStyles,
						]}
					>
						{children}
					</View>
				</ScrollView>
			) : (
				<View
					style={[
						safeAreaStyles(insets, isBottomTab).safeArea,
						extraSafeAreaStyles,
					]}
				>
					{children}
				</View>
			)}
		</View>
	);
};
