export type Product = {
	id: string;
	name: string;
	description: string;
	price: number;
	in_stock: boolean;
	stock_quantity: number;
	category: string;
	createdAt: string;
	updatedAt: string;
	user_id: string;
};

export type Order = {
	id: string;
	total_amount: number;
	payment_status: PaymentStatus;
	delivery_status: DeliveryStatus;
	createdAt: string;
	updatedAt: string;
	user_id: string;
	customer: string;
};

export enum PaymentStatus {
	COMPLETE = 'COMPLETE',
	FAILED = 'FAILED',
	PENDING = 'PENDING',
}

export enum DeliveryStatus {
	PENDING = 'PENDING',
	IN_TRANSIT = 'IN_TRANSIT',
	DELIVERED = 'DELIVERED',
}
