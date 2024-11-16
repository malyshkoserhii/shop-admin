export type Product = {
	id: string;
	name: string;
	description: string;
	price: number;
	in_stock: boolean;
	stock_quantity: number;
	category: string;
	createdAt: string;
	updatedAt: string;
	user_id: string;
};

export type ProductFields = Pick<
	Product,
	'name' | 'description' | 'price' | 'stock_quantity' | 'category'
>;

export type ProductKeys = Array<keyof ProductFields>;
