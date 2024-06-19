import { Service } from "@tsed/di";
import { Inject } from "@tsed/common";
import { UseConnection } from "@tsed/typeorm";
import { DB } from "@server/src/app/connections/connections";
import { UserDao } from "@server/src/app/users/dao/user.dao";
import { User } from "@shared/src/users/model/user";

@Service()
export class UserService {
	@Inject()
	@UseConnection(DB)
	userDao: UserDao;

	async getAllUsers(): Promise<Array<User>> {
		return await this.userDao.getAllUsers();
	}
}
