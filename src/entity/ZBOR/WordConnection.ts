import { Entity, PrimaryGeneratedColumn, Column, Index, BaseEntity, ManyToOne } from "typeorm";
import { Word } from "./Word";

@Entity({ name: "tbl_word_connections" })
export class WordConnection extends BaseEntity {

    @PrimaryGeneratedColumn()
    ID: number;

    @ManyToOne(type => Word)
    wordFrom: Word;

    @ManyToOne(type => Word)
    wordTo: Word;

    @Column({ default: -1 })
    Student_ID: number;

    @Column()
    Student_IP: string;

}
