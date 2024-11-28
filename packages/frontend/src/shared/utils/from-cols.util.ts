import { Columns } from '~shared/types';

export function formCols<C>(
	keys: Array<keyof C>,
	headers: Array<string>,
): Array<Columns<C>> {
	return keys.map((key, index) => ({
		field: key,
		header: headers[index],
	}));
}
