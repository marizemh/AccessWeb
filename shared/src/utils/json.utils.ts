import "reflect-metadata";

import { Constructor, TypedJSON } from "typedjson";

TypedJSON.mapType(Number, {
	deserializer: (json) => (json == null ? json : +json),
	serializer: (value) => (value == null ? value : value.toString()),
});

export class JsonUtils {
	static parse<T>(type: Constructor<T>, json: any): T {
		const typedJSON = new TypedJSON(type, { preserveNull: true });

		let result;
		if (Array.isArray(json)) {
			result = typedJSON.parseAsArray(json);
		} else {
			result = typedJSON.parse(json);
		}

		return result;
	}
}
