import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@Entity({ name: "tbl_games" })
@ObjectType()
export class Game extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    ID: number;

    @Field(() => String)
    @Column()
    Name: string

    @Field(() => String)
    @Column()
    Path: string

    @Field(() => String)
    @Column()
    Path_Dashboard: string

    @Field(() => String)
    @Column()
    Creator: string

    @Field(() => String)
    @Column()
    Template_Demo: string
}