import { Controller, Get, Inject } from "@tsed/common";
import { User } from "@shared/src/users/model/user";
import { ApiPath } from "@shared/src/users/users.api";
import { UserService } from "@server/src/app/users/service/user.service";

@Controller(ApiPath.USERS)
export class UserController {
	@Inject()
	userService: UserService;

	@Get(ApiPath.ALL_USERS)
	async get(): Promise<Array<User>> {
		return this.userService.getAllUsers();
	}
}
