import { PaginatedResponse } from '~shared/services/types';
import { Product } from '~shared/types/entities.types';

export type FindAllPoductsPayload = {
	skip: number;
	take: number;
};

export type FindAllPoductsResponse = PaginatedResponse<Product>;
