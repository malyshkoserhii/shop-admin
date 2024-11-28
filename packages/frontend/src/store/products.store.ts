import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';

import { Product } from '~shared/types/entities.types';

type ProductsStore = {
	products: Array<Product>;
	setProducts: (products: Array<Product>) => void;
};

export const useProductsStore = createWithEqualityFn<ProductsStore>((set) => {
	return {
		products: [],
		setProducts: (products: Array<Product>): void => {
			set({
				products,
			});
		},
	};
}, shallow);
