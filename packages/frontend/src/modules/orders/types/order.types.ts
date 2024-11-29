import { Order } from '~shared/types/entities.types';

export type OrderFields = Pick<
	Order,
	'id' | 'total_amount' | 'payment_status' | 'delivery_status' | 'customer'
>;

export type OrderKeys = Array<keyof OrderFields>;
