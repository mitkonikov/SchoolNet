import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index } from "typeorm";

@Entity({ name: "tbl_word_of_day" })
@Index(["Day"])
export class WordDay extends BaseEntity {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Word: string;

    @Column({ type: 'date' })
    Day: string;

    @Column()
    Description: string;

}