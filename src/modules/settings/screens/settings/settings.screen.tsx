import * as React from 'react';

import SignOutIcon from '../../../../assets/icons/sign-out';
import { Layout } from '../../../../shared/components/layout';
import { useAuthStore } from '../../../../store/auth.store';
import { userService } from '../../../../services/user';
import { SettingsItem } from '../../../../shared/components/settings-item';
import { COLORS } from '../../../../shared/styles';

export const SettingsScreen = () => {
	const setAuth = useAuthStore((state) => state.setAuth);
	const setTokens = useAuthStore((state) => state.setTokens);

	const signout = async () => {
		await userService.logout();
		setTokens({ access_token: null, refresh_token: null });
		setAuth(false);
	};
	return (
		<Layout scrolable={true}>
			<SettingsItem
				text="Sign out"
				onPress={signout}
				icon={<SignOutIcon stroke={COLORS.red} />}
				extraTextStyles={{ color: COLORS.red }}
			/>
		</Layout>
	);
};
