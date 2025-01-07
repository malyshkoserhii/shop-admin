import * as React from 'react';
import { Text, View } from 'react-native';

import { styles } from './success.styles';
import { Layout } from '../layout';
import { Header } from '../header';
import { Button } from '../../../shared/components/button';
import SuccessIcon from '../../../assets/icons/success';

type SuccessProps = {
	text: string;
	btnText: string;
	onPress: () => void;
};

export const Success: React.FunctionComponent<SuccessProps> = ({
	btnText,
	text,
	onPress,
}) => {
	return (
		<Layout>
			<View style={styles.container}>
				<Header />

				<View style={styles.wrapper}>
					<SuccessIcon />

					<Text style={styles.text}>{text}</Text>
				</View>

				<Button text={btnText} onPress={onPress} />
			</View>
		</Layout>
	);
};
