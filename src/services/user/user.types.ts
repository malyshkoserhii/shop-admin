export enum UserRoles {
	ADMIN = 'ADMIN',
	USER = 'USER',
}

export type User = {
	id: string;
	created_at: string;
	updated_at: string;
	email: string;
	is_verified: boolean;
	code: number | null;
	reset_pwd_code: number | null;
	full_name: string | null;
	role: UserRoles;
};
