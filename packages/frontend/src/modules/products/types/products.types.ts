import { Product } from '~shared/types/entities.types';

export type ProductFields = Pick<
	Product,
	'name' | 'description' | 'price' | 'stock_quantity' | 'category'
>;

export type ProductKeys = Array<keyof ProductFields>;

export enum ProductPrice {
	ALL = 'All',
	LOW_HEIGT = 'Low to Height',
	HEIGHT_LOW = 'Height to Low',
}
