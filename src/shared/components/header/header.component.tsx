import * as React from 'react';
import { StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native';

import { styles } from './header.styles';
import { PressarableIcon } from '../pressarable-icon';
import ArrowIcon from '../../../../assets/icons/arrow';
import { COLORS } from '../../../shared/styles';

type HeaderProps = {
	title?: string;
	onArrowPress?: () => void;
	centralElement?: React.ReactNode;
	rightButton?: React.ReactNode;
	extraContainerStyles?: StyleProp<ViewStyle>;
	extraArrowStyles?: StyleProp<ViewStyle>;
	extraTitleBoxStyles?: StyleProp<ViewStyle>;
	extraTitleStyles?: StyleProp<TextStyle>;
};

export const Header: React.FunctionComponent<HeaderProps> = ({
	onArrowPress,
	title,
	centralElement,
	rightButton,
	extraContainerStyles = {},
	extraArrowStyles = {},
	extraTitleStyles = {},
	extraTitleBoxStyles = {},
}) => {
	return (
		<View style={[styles.container, extraContainerStyles]}>
			{onArrowPress ? (
				<PressarableIcon
					icon={<ArrowIcon stroke={COLORS.black} />}
					onPress={onArrowPress}
					extraStyles={[styles.pressarableIcon, extraArrowStyles]}
				/>
			) : (
				<View style={styles.dummy} />
			)}
			{centralElement ? (
				centralElement
			) : (
				<View style={[styles.titleBox, extraTitleBoxStyles]}>
					{title && (
						<Text style={[styles.title, extraTitleStyles]}>
							{title}
						</Text>
					)}
				</View>
			)}
			{rightButton ? (
				<View style={styles.rightButtonWrapper}>{rightButton}</View>
			) : (
				<View style={styles.dummy} />
			)}
		</View>
	);
};
