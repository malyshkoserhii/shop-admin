import * as React from 'react';

import { FlatList, ListRenderItem } from 'react-native';

import { useProductsStore } from '../../../../store/products.store';

import { ProductListItem } from '../product-list-item';
import { Product } from '../../../../shared/types';
import { useGetProducts } from '../../hooks/get-products.hook';

export const ProductList = () => {
	const products = useProductsStore((state) => state.products);

	const { loading, onEndReached } = useGetProducts();

	const renderItem: ListRenderItem<Product> = React.useCallback(
		({ item }) => {
			return <ProductListItem product={item} />;
		},
		[],
	);

	return (
		<FlatList
			data={products}
			renderItem={renderItem}
			keyExtractor={(item) => item.id}
			showsVerticalScrollIndicator={false}
			onEndReached={onEndReached}
		/>
	);
};
