import { Injectable } from '@angular/core';
import { CommonService } from '@app/services/common.service';
import { HttpClient } from '@angular/common/http';
import { ApiPath } from '@shared/src/users/users.api';
import { User } from '@shared/src/users/model/user';

@Injectable({ providedIn: 'root' })
export class UserService extends CommonService {
	constructor(http: HttpClient) {
		super(http);
	}

	async getAllUsers(): Promise<Array<User>> {
		return await this.get(ApiPath.API_GET_ALL_USERS, User);
	}
}
