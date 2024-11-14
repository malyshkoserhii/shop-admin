export type SignInBody = {
	email: string;
	password: string;
};

export type SignInResponse = {
	access_token: string;
	refresh_token: string;
};
