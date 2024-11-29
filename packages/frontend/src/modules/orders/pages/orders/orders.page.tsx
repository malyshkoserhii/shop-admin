import * as React from 'react';

import { ordersScreenContainer, tableWrapper } from './orders.styles';
import { Table } from '~shared/components/table';
import { Order } from '~shared/types/entities.types';
import { Pagination } from '~shared/components/pagination';
import { Columns } from '~shared/types';
import { formCols } from '~shared/utils/from-cols.util';
import { OrderFields } from '~modules/orders/types';
import {
	ORDER_HEADERS,
	ORDER_KEYS,
	ORDERS_PER_PAGE,
} from '~modules/orders/constants';
import { useOrdersStore } from '~store/orders.store';
import { ordersService } from '~/services/orders';

export const OrdersPage = (): React.ReactNode => {
	const orders = useOrdersStore((state) => state.orders);
	const setOrders = useOrdersStore((state) => state.setOrders);

	const [page, setPage] = React.useState(0);
	const [totalPages, setTotalPages] = React.useState(1);

	React.useEffect(() => {
		findAllProducts();
	}, [page]);

	const findAllProducts = async (): Promise<void> => {
		const skip = page * ORDERS_PER_PAGE;
		const take = ORDERS_PER_PAGE;
		const products = await ordersService.findAll({
			skip,
			take,
		});
		setOrders(products.data);
		setTotalPages(products.total_pages);
	};

	const ordersColumns = formCols<OrderFields>(ORDER_KEYS, ORDER_HEADERS);

	const onPageChange = (selectedItem: { selected: number }): void => {
		setPage(selectedItem?.selected);
	};

	return (
		<div className={ordersScreenContainer}>
			<div className={tableWrapper}>
				<Table<Order, Columns<Order>>
					data={orders}
					columns={ordersColumns}
					onEditPress={() => {}}
				/>

				<Pagination
					totalPages={totalPages}
					onPageChange={onPageChange}
					forcePage={page}
				/>
			</div>
		</div>
	);
};
