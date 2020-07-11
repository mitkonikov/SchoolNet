import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, Index } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { User } from "../network/User";

@Entity({ name: "tbl_following" })
@ObjectType()
@Index(["Follower_ID", "Following_ID"])
export class Follow extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    ID: number;

    @Field(() => User)
    @Column()
    Follower_ID: User

    @Field(() => User)
    @Column()
    Following_ID: User

    @Field(() => String)
    @Column({ type: "datetime" })
    Timestamp: string
}