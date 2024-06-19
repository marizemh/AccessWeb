import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class users1631658708285 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "users",
				columns: [
					{
						name: "username",
						type: "varchar",
						isPrimary: true,
						isNullable: false,
					},
					{
						name: "firstName",
						type: "varchar",
						isNullable: false,
					},
					{
						name: "lastName",
						type: "varchar",
						isNullable: false,
					},
				],
			}),
			true
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("users");
	}
}
