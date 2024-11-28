import { HttpFactoryService } from '~shared/services/http-factory.service';
import { HttpService } from '~shared/services/http.service';
import { SignInBody, SignInResponse } from './auth.types';

class AuthService {
	private readonly module = 'auth';

	constructor(private readonly httpService: HttpService) {
		this.httpService = httpService;
	}

	public async signin(body: SignInBody): Promise<SignInResponse> {
		return this.httpService.post(`${this.module}/signin`, body);
	}

	public async refresh(refreshToken: string): Promise<SignInResponse> {
		return this.httpService.post(
			`${this.module}/refresh`,
			{},
			{
				headers: {
					Authorization: `Bearer ${refreshToken}`,
				},
			},
		);
	}

	public async signout(): Promise<void> {
		return this.httpService.post(`${this.module}/logout`, {});
	}
}

export const authService = new AuthService(
	new HttpFactoryService().createHttpService(),
);
