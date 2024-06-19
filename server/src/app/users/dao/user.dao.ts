import { EntityRepository, Repository } from "typeorm";
import { User } from "@shared/src/users/model/user";

@EntityRepository(User)
export class UserDao extends Repository<User> {
	async getAllUsers(): Promise<Array<User>> {
		return await this.find();
	}
}
