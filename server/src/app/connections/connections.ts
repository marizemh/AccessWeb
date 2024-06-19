import { Configuration, registerProvider } from "@tsed/di";
import { createConnection } from "@tsed/typeorm";
import { Connection, ConnectionOptions } from "typeorm";

export const DEFAULT_CONNECTION = Symbol.for("DEFAULT_CONNECTION");
export type DEFAULT_CONNECTION = Connection;

export const DB = "db";

registerProvider({
	provide: DEFAULT_CONNECTION,
	deps: [Configuration],
	async useAsyncFactory(configuration: Configuration) {
		let settings = configuration.get<ConnectionOptions[]>("typeorm")!;
		// const connectionOptions = settings.find(o => o.name === "default");
		const connectionOptions = settings[0];

		return createConnection(connectionOptions!);
	},
});
