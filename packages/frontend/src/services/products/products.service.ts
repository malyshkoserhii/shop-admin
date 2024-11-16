import { HttpFactoryService } from '~shared/services/http-factory.service';
import { EnhancedWithAuthHttpService } from '~shared/services/http-auth.service';
import {
	CreateProductPayload,
	CreateProductResponse,
	FindAllPoductsPayload,
	FindAllPoductsResponse,
} from './products.types';

export class ProductsService {
	private module = 'products';

	constructor(private readonly httpService: EnhancedWithAuthHttpService) {
		this.httpService = httpService;
	}

	public async findAll(
		payload: FindAllPoductsPayload,
	): Promise<FindAllPoductsResponse> {
		return await this.httpService.get(
			`${this.module}/all?skip=${payload.skip}&take=${payload.take}`,
		);
	}

	public async create(
		payload: CreateProductPayload,
	): Promise<CreateProductResponse> {
		return await this.httpService.post(`${this.module}/create`, {
			...payload,
		});
	}
}

export const productsService = new ProductsService(
	new HttpFactoryService().createAuthHttpService(),
);
