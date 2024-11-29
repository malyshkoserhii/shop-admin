import { PaymentStatus } from '~shared/types/entities.types';
import { ProductKeys, ProductPrice } from '../types';

export const PRODUCT_KEYS: ProductKeys = [
	'name',
	'description',
	'price',
	'stock_quantity',
	'category',
];

export const HEADERS = [
	'Name',
	'Description',
	'Price',
	'Stock Quantity',
	'Category',
];

export const PRODUCTS_PER_PAGE = 10;

export const PRODUCTS_OPTIONS_ARRAY = [
	PaymentStatus.ALL,
	PaymentStatus.COMPLETE,
	PaymentStatus.FAILED,
	PaymentStatus.PENDING,
];

export const PRODUCTS_PRICE_OPTIONS = [
	ProductPrice.ALL,
	ProductPrice.HEIGHT_LOW,
	ProductPrice.LOW_HEIGT,
];
