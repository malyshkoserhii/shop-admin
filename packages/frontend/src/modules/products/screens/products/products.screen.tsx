import * as React from 'react';

import { productsScreenContainer } from './products.styles';
import { Table } from '~shared/components/table';
import { DATA } from './mock';

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

export type Columns<T> = {
	field: keyof T;
	header: string;
};

export type ProductKeys = Array<keyof ProductFields>;

const PRODUCT_KEYS: ProductKeys = [
	'name',
	'description',
	'price',
	'stock_quantity',
	'category',
];

const HEADERS = ['Name', 'Description', 'Price', 'Stock Quantity', 'Category'];

function formCols<C>(
	keys: Array<keyof C>,
	headers: Array<string>,
): Array<Columns<C>> {
	return keys.map((key, index) => ({
		field: key,
		header: headers[index],
	}));
}

const COLUMNS = formCols<ProductFields>(PRODUCT_KEYS, HEADERS);
console.log('🚀 ~ COLUMNS:', COLUMNS);

export const ProductsScreen = (): React.ReactNode => {
	return (
		<div className={productsScreenContainer}>
			<Table<Product, Columns<ProductFields>>
				data={DATA}
				columns={COLUMNS}
			/>
		</div>
	);
};
