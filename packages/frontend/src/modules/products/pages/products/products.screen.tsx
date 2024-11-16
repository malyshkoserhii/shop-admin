import * as React from 'react';

import { productsScreenContainer } from './products.styles';
import { Table } from '~shared/components/table';
import { DATA } from './mock';
import {
	PRODUCT_KEYS,
	HEADERS,
} from '~modules/products/constants/products.consts';
import { ProductFields, Product } from '~modules/products/types';
import { Columns } from '~shared/types';
import { formCols } from '~shared/utils/from-cols.util';

export const ProductsScreen = (): React.ReactNode => {
	const productColumns = formCols<ProductFields>(PRODUCT_KEYS, HEADERS);

	return (
		<div className={productsScreenContainer}>
			<Table<Product, Columns<ProductFields>>
				data={DATA}
				columns={productColumns}
			/>
		</div>
	);
};
