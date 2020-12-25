import { Entity, PrimaryGeneratedColumn, Column, Index, BaseEntity } from "typeorm";

@Entity({ name: "tbl_generated_words" })
export class WordGenerated extends BaseEntity {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column({ type: "text" })
    Word: string;

    @Column({ default: 0 })
    Likes: number;

}
