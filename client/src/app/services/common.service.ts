import 'core-js/proposals/reflect-metadata';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';
import { JsonUtils } from '@shared/src/utils/json.utils';
import { Constructor } from 'typedjson';

export abstract class CommonService {
	protected constructor(private http: HttpClient) {}

	private async executeRequest<S>(
		path: string,
		request: (path: string) => {},
		resultType: Constructor<any>
	): Promise<S> {
		this.checkPath(path);
		path = this.buildBackendApiPath(path);
		let result = null;
		try {
			result = await request(path);
			if (resultType) {
				result = JsonUtils.parse(resultType, result);
			}
		} catch (error) {
			throw error;
		}

		return result;
	}

	public async get<S>(path: string, resultType: Constructor<any>): Promise<S> {
		return await this.executeRequest(
			path,
			(requestPath) => {
				return this.http.get(requestPath).toPromise();
			},
			resultType
		);
	}

	public async post<S>(path: string, body: object, resultType?: Constructor<any>): Promise<S> {
		body = this.replaceUndefinedWithNull(body);
		return await this.executeRequest(
			path,
			(requestPath) => {
				const httpOptions = {
					headers: new HttpHeaders({
						'Content-Type': 'application/json',
					}),
				};
				return this.http.post(requestPath, body, httpOptions).toPromise();
			},
			resultType
		);
	}

	public async put<S>(path: string, body?: object, resultType?: Constructor<any>): Promise<S> {
		body = this.replaceUndefinedWithNull(body);
		return await this.executeRequest(
			path,
			(requestPath) => {
				const httpOptions = {
					headers: new HttpHeaders({
						'Content-Type': 'application/json',
					}),
				};
				return this.http.put(requestPath, body, httpOptions).toPromise();
			},
			resultType
		);
	}

	public async delete<S>(path: string, resultType: Constructor<any>): Promise<S> {
		return await this.executeRequest(
			path,
			(requestPath) => {
				return this.http.delete(requestPath).toPromise();
			},
			resultType
		);
	}

	/**
	 * Weird things happen when sending json objects with undefined values
	 * over to the Ts.ed server. That's why we replace undefined with nulls.
	 *
	 * @param json
	 * @private
	 */
	private replaceUndefinedWithNull(json) {
		Object.keys(json).forEach((key) => {
			if (json[key] === undefined) {
				json[key] = null;
			}
		});

		return json;
	}

	private checkPath(path: string): void {
		if (!path) {
			throw new Error('API Path cannot be null');
		}
	}

	private buildBackendApiPath(path: string): string {
		return environment.backendApiUrl + path;
	}
}
