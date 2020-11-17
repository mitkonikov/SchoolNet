import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@Entity({ name: "tbl_students_info" })
@ObjectType()
export class UserInfo extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    ID: number;

    @Field(() => String)
    @Column({ type: "text" })
    Display_Name: string

    @Field(() => Date)
    @Column({ type: "date" })
    Birthday: Date

    @Field(() => String)
    @Column({ type: "text" })
    Emoji: string

    @Field(() => String)
    @Column({ type: "text" })
    About: string

    @Field(() => Boolean)
    @Column({ type: "tinyint", width: 1 })
    Manifest: boolean

    @Field(() => Date)
    @Column({ type: "datetime" })
    Last_Name_Change: Date
}