import { HttpFactoryService } from '~shared/services/http-factory.service';
import { EnhancedWithAuthHttpService } from '~shared/services/http-auth.service';
import {
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
}

export const productsService = new ProductsService(
	new HttpFactoryService().createAuthHttpService(),
);
