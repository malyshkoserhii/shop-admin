import { PaginatedResponse } from '~shared/services/types';
import { Product } from '~shared/types/entities.types';

type SortOptions = 'asc' | 'desc';

export type FindAllPoductsPayload = {
	skip: number;
	take: number;
	sort: SortOptions;
};

export type FindAllPoductsResponse = PaginatedResponse<Product>;

export type CreateProductPayload = Pick<
	Product,
	'name' | 'description' | 'price' | 'stock_quantity' | 'category'
>;

export type CreateProductResponse = {
	id: string;
	name: string;
	description: string;
	price: number;
	in_stock: boolean;
	stock_quantity: number;
	category: string;
	createdAt: string;
	updatedAt: string;
};

export type UpdateProductPayload = Pick<
	Product,
	'id' | 'name' | 'description' | 'price' | 'stock_quantity' | 'category'
>;
