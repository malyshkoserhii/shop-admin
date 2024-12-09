import * as React from 'react';
import { StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native';

import { styles } from './header.styles';
import Logo from 'src/assets/icons/logo.svg';
import { PressarableIcon } from '../pressarable-icon';
import Arrow from 'src/assets/icons/arrow.svg';
import { COLORS } from 'src/shared/themes';

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
					icon={<Arrow stroke={COLORS.eerieBlack} />}
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
					<Logo width={87} height={61} />
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
