export type Columns<T> = {
	field: keyof T;
	header: string;
};

export type Options<T> = { option: T; value: T | undefined };
