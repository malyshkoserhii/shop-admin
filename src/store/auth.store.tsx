import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Tokens = {
	access_token: string | null;
	refresh_token: string | null;
};

type AuthStore = {
	auth: boolean;
	setAuth: (isAuth: boolean) => void;
	tokens: Tokens;
	setTokens: (tokens: Tokens) => void;
};

export const useAuthStore = create<AuthStore>()(
	persist(
		(set) => {
			return {
				auth: false,
				tokens: {
					access_token: null,
					refresh_token: null,
				},
				setAuth: (auth: boolean): void =>
					set(() => {
						return {
							auth,
						};
					}),
				setTokens: (tokens: Tokens): void =>
					set(() => {
						return {
							tokens,
						};
					}),
			};
		},

		{
			name: 'auth',
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);
