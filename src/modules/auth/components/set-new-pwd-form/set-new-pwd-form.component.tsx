import * as React from 'react';
import { Text, View } from 'react-native';

import { styles } from './set-new-pwd-form.styles';
import { Input } from '../../../../shared/components/input';
import { Button } from '../../../../shared/components/button';
import { useSetNewPwd } from '../../hooks';
import { InputSection } from '../input-section';

type SetNewPasswordFormProps = {
	email: string;
};

export const SetNewPasswordForm: React.FunctionComponent<
	SetNewPasswordFormProps
> = ({ email }) => {
	const { control, handleSubmit, isPending, onSubmit } = useSetNewPwd({
		email,
	});

	return (
		<View style={styles.form}>
			<InputSection extraStyles={styles.inputSection}>
				<Text style={styles.title}>
					Password should contain 8 symbols and include capital
					letter, one digit and one special symbol
				</Text>

				<Input
					name="password"
					control={control}
					label="New password"
					defaultValue=""
					secureTextEntry={true}
				/>

				<Input
					name="confirm_password"
					control={control}
					label="Confirm new password"
					defaultValue=""
					secureTextEntry={true}
				/>
			</InputSection>

			<Button
				text="Set new password"
				onPress={handleSubmit(onSubmit)}
				loading={isPending}
			/>
		</View>
	);
};
