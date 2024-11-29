import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';

import { Order } from '~shared/types/entities.types';

type OrdersStore = {
	orders: Array<Order>;
	setOrders: (products: Array<Order>) => void;
};

export const useOrdersStore = createWithEqualityFn<OrdersStore>((set) => {
	return {
		orders: [],
		setOrders: (orders: Array<Order>): void => {
			set({
				orders,
			});
		},
	};
}, shallow);
