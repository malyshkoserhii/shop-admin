import { Product } from '../../shared/types';

export type GetProductsResponse = {
	data: Product[];
	total_pages: number;
	total_results: number;
};
