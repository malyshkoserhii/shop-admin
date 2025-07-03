import * as React from 'react';
import { useProductsStore } from '../../../store/products.store';
import { productService } from '../../../services/products/products.service';
import { TAKE_ENTITIES } from '../../../shared/constants/pagination';

export const useGetProducts = () => {
	const [loading, setLoading] = React.useState(false);

	const [totalPages, setTotalPages] = React.useState(0);

	const page = React.useRef(2);

	const setProducts = useProductsStore((state) => state.setProducts);
	const setPaginatedProducts = useProductsStore(
		(state) => state.setPaginatedProducts,
	);

	const fetchProducts = React.useCallback(async () => {
		try {
			const products = await productService.getProducts({
				skip: 0,
				take: 10,
			});

			setProducts(products.data);
			setTotalPages(products.total_pages);
		} catch (error) {
		} finally {
			setLoading(false);
		}
	}, []);

	React.useEffect(() => {
		fetchProducts();
	}, []);

	const onEndReached = React.useCallback(async () => {
		try {
			if (totalPages < page.current) {
				return;
			}

			const skip = page.current * TAKE_ENTITIES - 10;
			const take = page.current * TAKE_ENTITIES;

			const newProducts = await productService.getProducts({
				skip,
				take,
			});

			setPaginatedProducts(newProducts.data);
			setTotalPages(newProducts.total_pages);

			page.current = page.current + 1;
		} catch (error) {
		} finally {
			setLoading(false);
		}
	}, [page.current, totalPages]);

	return { loading, onEndReached };
};
