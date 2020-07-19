import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@Entity({ name: "tbl_students" })
@ObjectType()
export class User extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    ID: number;

    @Field(() => String)
    @Column({ type: "text" })
    Nickname: string

    @Field(() => String)
    @Column({ type: "text" })
    Password: string

    @Field(() => Number)
    @Column({ type: "smallint", width: 6, default: 0 })
    Role: number

    @Field(() => String)
    @Column({ type: "text" })
    Firstname: string

    @Field(() => String)
    @Column({ type: "text" })
    Lastname: string

    @Field(() => Number)
    @Column({ type: "smallint", width: 6 })
    School_ID: number

    @Field(() => String)
    @Column({ type: "text" })
    Email: string

    @Field(() => String)
    @Column({ type: "text" })
    Gender: string

    @Field(() => Boolean)
    @Column({ type: "tinyint", width: 1 })
    Valid: boolean

    @Field(() => Boolean)
    @Column({ type: "tinyint", width: 1 })
    Online: boolean

    @Field(() => String)
    @Column({ type: "text" })
    FB_AccessToken: string

    @Field(() => String)
    @Column({ type: "text" })
    FB_RefreshToken: string

    @Field(() => String)
    @Column({ type: "text" })
    FB_ProfileName: string

    @Field(() => String)
    @Column({ type: "text" })
    FB_ID: string

    @Field(() => String)
    @Column({ type: "text" })
    G_AccessToken: string

    @Field(() => String)
    @Column({ type: "text" })
    G_RefreshToken: string

    @Field(() => String)
    @Column({ type: "text" })
    G_ID: string

    @Field(() => String)
    @Column({ type: "text" })
    G_ProfileName: string

    @Field(() => String)
    @Column({ type: "text" })
    Redirect: string
}