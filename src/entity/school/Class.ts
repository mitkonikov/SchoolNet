import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { User } from "../network/User";

@Entity({ name: "tbl_classes" })
@ObjectType()
export class Class extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    ID: number;

    @Field(() => User)
    @ManyToOne(type => User)
    Teacher_ID: User

    @Field(() => Number)
    @Column()
    Class_Year: number

    @Field(() => Number)
    @Column()
    Class_Number: number

    @Field(() => [User])
    @ManyToMany(type => User)
    Students: [User]
}