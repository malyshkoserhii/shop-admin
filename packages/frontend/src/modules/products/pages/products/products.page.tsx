import * as React from 'react';
import { useMutation } from '@tanstack/react-query';

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
	UpdateProductPayload,
} from '~/services/products/products.types';

export const ProductsScreen = (): React.ReactNode => {
	const products = useProductsStore((state) => state.products);
	const setProducts = useProductsStore((state) => state.setProducts);

	const [page, setPage] = React.useState(0);
	const [totalPages, setTotalPages] = React.useState(1);

	const [isOpen, setIsOpen] = React.useState(false);
	const [product, setProduct] = React.useState<CreateProductResponse | null>(
		null,
	);

	const toggleModal = (): void => {
		setIsOpen((prev) => !prev);
	};

	const productColumns = formCols<ProductFields>(PRODUCT_KEYS, HEADERS);

	const onPageChange = (selectedItem: { selected: number }): void => {
		setPage(selectedItem?.selected);
	};

	const addProduct = async (
		payload: CreateProductPayload,
	): Promise<CreateProductResponse> => await productsService.create(payload);

	const { mutateAsync: createProduct } = useMutation({
		mutationFn: addProduct,
		onSuccess: async () => {
			await findAllProducts();
			toggleModal();
		},
	});

	const updateProduct = async (
		payload: UpdateProductPayload,
	): Promise<CreateProductResponse> => await productsService.update(payload);

	const { mutateAsync: editProduct } = useMutation({
		mutationFn: updateProduct,
		onSuccess: async () => {
			await findAllProducts();
			toggleModal();
		},
	});

	React.useEffect(() => {
		findAllProducts();
	}, [page]);

	const findAllProducts = async (): Promise<void> => {
		const skip = page * PRODUCTS_PER_PAGE;
		const take = PRODUCTS_PER_PAGE;
		const products = await productsService.findAll({
			skip,
			take,
		});
		setProducts(products.data);
		setTotalPages(products.total_pages);
	};

	const onAddProductPress = (): void => {
		setProduct(null);
		toggleModal();
	};

	const onEditPress = async (productId: string): Promise<void> => {
		try {
			const uniqueProduct = await productsService.findUnique(productId);
			setProduct(uniqueProduct);
			toggleModal();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className={productsScreenContainer}>
				<div className={actionsBlock}>
					<Button text="Add Product" onClick={onAddProductPress} />
				</div>

				<div className={tableWrapper}>
					<Table<Product, Columns<ProductFields>>
						data={products}
						columns={productColumns}
						onEditPress={onEditPress}
					/>

					<Pagination
						totalPages={totalPages}
						onPageChange={onPageChange}
						forcePage={page}
					/>
				</div>
			</div>
			<Modal isOpen={isOpen} toggleModal={toggleModal}>
				<ProductForm
					product={product}
					createProduct={createProduct}
					editProduct={editProduct}
				/>
			</Modal>
		</>
	);
};
