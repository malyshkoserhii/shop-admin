import * as React from 'react';

import {
	actionsBlock,
	productsScreenContainer,
	tableWrapper,
} from './products.styles';
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
import { Button } from '~shared/components/button';
import { Modal } from '~shared/components/modal';
import { ProductForm } from '~modules/products/components/product-form';
import {
	CreateProductPayload,
	CreateProductResponse,
} from '~/services/products/products.types';
import { useMutation } from '@tanstack/react-query';

export const ProductsScreen = (): React.ReactNode => {
	const products = useProductsStore((state) => state.products);
	const setProducts = useProductsStore((state) => state.setProducts);

	const [page, setPage] = React.useState(1);
	const [totalPages, setTotalPages] = React.useState(1);

	const [isOpen, setIsOpen] = React.useState(false);

	const toggleOpen = (): void => setIsOpen((prev) => !prev);

	const productColumns = formCols<ProductFields>(PRODUCT_KEYS, HEADERS);

	const onPageChange = (selectedItem: { selected: number }): void => {
		setPage(selectedItem?.selected);
	};

	const addProduct = async (
		payload: CreateProductPayload,
	): Promise<CreateProductResponse> => await productsService.create(payload);

	const { mutateAsync: createProduct } = useMutation({
		mutationFn: addProduct,
	});

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
	}, [page, createProduct]);

	return (
		<>
			<div className={productsScreenContainer}>
				<div className={actionsBlock}>
					<Button text="Add Product" onClick={toggleOpen} />
				</div>

				<div className={tableWrapper}>
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
			</div>
			<Modal isOpen={isOpen} toggleOpen={toggleOpen}>
				<ProductForm
					toggleModal={toggleOpen}
					createProduct={createProduct}
				/>
			</Modal>
		</>
	);
};
