import { PaginatedResponse } from '~shared/services/types';
import { Order, Product } from '~shared/types/entities.types';

export type FindAllOrdersPayload = {
	skip: number;
	take: number;
};

export type FindAllOrdersResponse = PaginatedResponse<Order>;

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
