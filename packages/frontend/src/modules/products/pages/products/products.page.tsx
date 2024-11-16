import * as React from 'react';

import { productsScreenContainer } from './products.styles';
import { Table } from '~shared/components/table';
import {
	PRODUCT_KEYS,
	HEADERS,
	PRODUCTS_PER_PAGE,
} from '~modules/products/constants/products.consts';
import { ProductFields } from '~modules/products/types';
import { Columns } from '~shared/types';
import { formCols } from '~shared/utils/from-cols.util';
import { Product } from '~shared/types/entities.types';
import { productsService } from '~/services/products';
import { useProductsStore } from '~store/products.store';
import { Pagination } from '~shared/components/pagination';

export const ProductsScreen = (): React.ReactNode => {
	const products = useProductsStore((state) => state.products);
	const setProducts = useProductsStore((state) => state.setProducts);

	const [page, setPage] = React.useState(1);
	const [totalPages, setTotalPages] = React.useState(1);

	React.useEffect(() => {
		const findAllProducts = async (): Promise<void> => {
			const take = page * PRODUCTS_PER_PAGE;
			const skip = take - PRODUCTS_PER_PAGE;
			const products = await productsService.findAll({
				skip,
				take,
			});
			setProducts(products.data);
			setTotalPages(products.total_pages);
		};
		findAllProducts();
	}, [page]);

	const productColumns = formCols<ProductFields>(PRODUCT_KEYS, HEADERS);

	const onPageChange = (selectedItem: { selected: number }): void => {
		setPage(selectedItem?.selected);
	};

	return (
		<div className={productsScreenContainer}>
			<Table<Product, Columns<ProductFields>>
				data={products}
				columns={productColumns}
			/>

			<Pagination
				totalPages={totalPages}
				onPageChange={onPageChange}
				forcePage={page}
			/>
		</div>
	);
};
