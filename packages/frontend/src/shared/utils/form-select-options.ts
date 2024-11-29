import { Options } from '~shared/types';

export function formSelectOptions<T>(options: Array<T>): Array<Options<T>> {
	return options.map((el) => {
		return {
			option: el,
			value: el === 'ALL' ? undefined : el,
		};
	});
}
