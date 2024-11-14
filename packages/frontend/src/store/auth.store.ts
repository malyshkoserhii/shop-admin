import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';

type AuthStore = {
	auth: boolean;
	setAuth: (isAuth: boolean) => void;
};

export const useAuthStore = createWithEqualityFn<AuthStore>((set) => {
	return {
		auth: false,
		setAuth: (auth: boolean): void =>
			set(() => {
				return {
					auth,
				};
			}),
	};
}, shallow);
