export type SignInBody = {
	email: string;
	password: string;
};

export type SignUpBody = {
	email: string;
	full_name: string;
	password: string;
};

export type VerifyEmailBody = {
	email: string;
	code: number;
};

export type SignInResponse = {
	access_token: string;
	refresh_token: string;
};

export type ResetPwdBody = {
	email: string;
};

export type SetNewPassword = {
	email: string;
	password: string;
};
