export class BaseApiPath {
	static API = "/api";

	public static replaceParam(url, param, value) {
		return url.replace(":" + param, String(value));
	}
}

export class ApiContentType {
	static CONTENT_TYPE_APPLICATION_JSON = "application/json";
}
