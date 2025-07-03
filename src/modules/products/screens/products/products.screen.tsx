import { Text } from 'react-native';

import { Layout } from '../../../../shared/components/layout';

import { ProductList } from '../../components/products-list';

export const ProductsScreen = () => {
	return (
		<Layout isBottomTab={true}>
			<Text>Products Screeen</Text>

			<ProductList />
		</Layout>
	);
};
