import { create } from 'zustand';

import { Product } from '../shared/types/entities.types';

type ProductsStore = {
	products: Product[];
	setProducts: (products: Product[]) => void;
	setPaginatedProducts: (newProducts: Product[]) => void;
	totalPages: number;
	setTotalPages: (totalPages: number) => void;
	totalResults: number;
	setTotalReults: (totalResults: number) => void;
};

export const useProductsStore = create<ProductsStore>()((set, get) => {
	return {
		products: [],
		setProducts: (products: Product[]): void =>
			set(() => {
				return {
					products,
				};
			}),
		setPaginatedProducts: (newProducts: Product[]): void =>
			set(() => {
				const oldProducts = get().products;

				return {
					products: [...oldProducts, ...newProducts],
				};
			}),
		totalPages: 0,
		setTotalPages: (totalPages: number): void =>
			set(() => {
				return {
					totalPages,
				};
			}),
		totalResults: 0,
		setTotalReults: (totalResults: number): void =>
			set(() => {
				return {
					totalResults,
				};
			}),
	};
});
