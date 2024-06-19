import "reflect-metadata";
import { Column, Entity, PrimaryColumn } from "typeorm";
import { Example, Property, Schema } from "@tsed/schema";
import { jsonMember, jsonObject } from "typedjson";

@jsonObject
@Entity("users")
@Schema({ title: "User" })
export class User {
	@jsonMember(() => String)
	@PrimaryColumn()
	@Property()
	@Example("cmiranda@skydropx.com")
	username: string;

	@jsonMember(() => String)
	@Column()
	@Property()
	@Example("Cristian")
	firstName: string;

	@jsonMember(() => String)
	@Column()
	@Property()
	@Example("Miranda")
	lastName: string;
}
