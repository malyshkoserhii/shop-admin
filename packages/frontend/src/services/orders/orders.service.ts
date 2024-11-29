import { HttpFactoryService } from '~shared/services/http-factory.service';
import { EnhancedWithAuthHttpService } from '~shared/services/http-auth.service';
import { FindAllOrdersPayload, FindAllOrdersResponse } from './orders.types';
// import {
// 	CreateProductPayload,
// 	CreateProductResponse,
// 	FindAllPoductsPayload,
// 	FindAllPoductsResponse,
// 	UpdateProductPayload,
// } from './products.types';

export class OrdersService {
	private module = 'orders';

	constructor(private readonly httpService: EnhancedWithAuthHttpService) {
		this.httpService = httpService;
	}

	public async findAll(
		payload: FindAllOrdersPayload,
	): Promise<FindAllOrdersResponse> {
		return await this.httpService.get(
			`${this.module}/all?skip=${payload.skip}&take=${payload.take}`,
		);
	}

	// public async create(
	// 	payload: CreateProductPayload,
	// ): Promise<CreateProductResponse> {
	// 	return await this.httpService.post(`${this.module}/create`, {
	// 		...payload,
	// 	});
	// }

	// public async findUnique(id: string): Promise<CreateProductResponse> {
	// 	return await this.httpService.get(`${this.module}/${id}`);
	// }

	// public async update(
	// 	payload: UpdateProductPayload,
	// ): Promise<CreateProductResponse> {
	// 	return await this.httpService.post(
	// 		`${this.module}/update/${payload.id}`,
	// 		{
	// 			...payload,
	// 		},
	// 	);
	// }

	// public async delete(productId: string): Promise<void> {
	// 	return await this.httpService.delete(
	// 		`${this.module}/delete/${productId}`,
	// 	);
	// }
}

export const ordersService = new OrdersService(
	new HttpFactoryService().createAuthHttpService(),
);
