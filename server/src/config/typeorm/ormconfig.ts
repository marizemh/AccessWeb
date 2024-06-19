import { ConnectionOptions } from "typeorm";

// @ts-ignore
export = [
	{
		name: "db",
		type: process.env.DB_TYPE,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		synchronize: process.env.DB_SYNCHRONIZE == "true",
		dropSchema: process.env.DB_DROP_SCHEMA == "true",
		migrationsRun: process.env.DB_RUN_MIGRATIONS == "true",
		logging: process.env.DB_LOGGING == "true",
		entities: ["${rootDir}/../../shared/**/model/**/*.ts"],
		migrations: ["migration/**/*.ts"],
		subscribers: ["${rootDir}/subscriber/**/*.ts"],
		cli: {
			entitiesDir: "${rootDir}/../../shared/**/model",
			migrationsDir: "migration",
			subscribersDir: "${rootDir}/subscriber",
		},
	},
] as ConnectionOptions[];
