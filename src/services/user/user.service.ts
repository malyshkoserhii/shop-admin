import { EnhancedWithAuthHttpService } from '../../shared/services/http-auth.service';
import { HttpFactoryService } from '../../shared/services/http-factory.service';
import { User } from './user.types';

class UserService {
	constructor(private readonly httpService: EnhancedWithAuthHttpService) {}

	async getMe() {
		return this.httpService.get<User>('users/me');
	}

	async logout() {
		return this.httpService.post('auth/logout', {});
	}
}

export const userService = new UserService(
	new HttpFactoryService().createAuthHttpService(),
);
