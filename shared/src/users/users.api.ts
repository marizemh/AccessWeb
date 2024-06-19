import { BaseApiPath } from "@shared/src/common/base.api";

export class ApiParameter {}

export class ApiPath {
	/*
	 * Controller API path
	 */
	static USERS = "/users";

	/*
	 * Endpoints
	 */
	static ALL_USERS = "/";

	/*
	 * Full API paths to be consumed by clients
	 */
	static API_USERS = BaseApiPath.API + ApiPath.USERS;
	static API_GET_ALL_USERS = ApiPath.API_USERS + ApiPath.ALL_USERS;
}
