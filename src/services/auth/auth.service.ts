import { IResponseMessage } from '../../shared/services/types';
import { HttpFactoryService } from '../../shared/services/http-factory.service';
import { HttpService } from '../../shared/services/http.service';
import {
	ResetPwdBody,
	SetNewPassword,
	SignInBody,
	SignInResponse,
	SignUpBody,
	VerifyEmailBody,
} from './auth.types';

class AuthService {
	private readonly module = 'auth';

	constructor(private readonly httpService: HttpService) {
		this.httpService = httpService;
	}

	public async signup(body: SignUpBody): Promise<IResponseMessage> {
		return this.httpService.post(`${this.module}/signup`, body);
	}

	public async verifyEmail(body: VerifyEmailBody): Promise<IResponseMessage> {
		return this.httpService.post(`${this.module}/verify-email`, body);
	}

	public async signin(body: SignInBody): Promise<SignInResponse> {
		return this.httpService.post(`${this.module}/signin`, body);
	}

	public async resetPwd(body: ResetPwdBody): Promise<IResponseMessage> {
		return this.httpService.post(`${this.module}/reset-password`, body);
	}

	public async verifyResetPwd(
		body: VerifyEmailBody,
	): Promise<IResponseMessage> {
		return this.httpService.post(
			`${this.module}/verify-reset-password`,
			body,
		);
	}

	public async setNewPassword(
		body: SetNewPassword,
	): Promise<IResponseMessage> {
		return this.httpService.post(`${this.module}/set-new-password`, body);
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
