import * as React from 'react';
import { ScrollView, StyleProp, Text, View, ViewStyle } from 'react-native';
import Modal from 'react-native-modal';

import { styles } from './custom-modal.styles';
import Cross from 'src/assets/icons/cross.svg';
import { PressarableIcon } from '../pressarable-icon';

type ModalProps = {
	children: React.ReactNode;
	isVisible: boolean;
	title: string;
	close: () => void;
	extraContainerStyles?: StyleProp<ViewStyle>;
	extraChildrenWrapperStyles?: StyleProp<ViewStyle>;
	onModalHide?: () => void;
	isInfoPopup?: boolean;
};

export const CustomModal: React.FunctionComponent<ModalProps> = ({
	children,
	isVisible,
	title,
	close,
	onModalHide,
	extraContainerStyles = {},
	extraChildrenWrapperStyles = {},
}) => {
	return (
		<Modal
			isVisible={isVisible}
			style={styles.modal}
			backdropOpacity={0}
			onBackdropPress={close}
			onModalHide={onModalHide}
			animationInTiming={500}
			animationOutTiming={500}
			backdropTransitionInTiming={500}
			backdropTransitionOutTiming={0}
		>
			<View style={extraContainerStyles}>
				<View style={styles.contentWrapper}>
					<View style={styles.titleWrapper}>
						<PressarableIcon
							extraStyles={styles.crossBtn}
							icon={<Cross width={15} height={15} />}
							onPress={close}
						/>

						<Text style={styles.title}>{title}</Text>
					</View>
					<ScrollView>
						<View
							style={[
								styles.childrenWrapper,
								extraChildrenWrapperStyles,
							]}
						>
							{children}
						</View>
					</ScrollView>
				</View>
			</View>
		</Modal>
	);
};
