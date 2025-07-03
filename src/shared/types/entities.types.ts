export type Product = {
	id: string;
	createdAt: string;
	updatedAt: string;
	name: string;
	description: string | null;
	price: number;
	in_stock: boolean;
	stock_quantity: number;
	category: string | null;
};
