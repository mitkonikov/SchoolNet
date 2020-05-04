import { Entity, PrimaryGeneratedColumn, Column, Index, BaseEntity, ManyToOne } from "typeorm";
import { Words } from "./Words";

@Entity({ name: "tbl_word_connections" })
export class WordConnection extends BaseEntity {

    @PrimaryGeneratedColumn()
    ID: number;

    @ManyToOne(type => Words)
    wordFrom: Words;

    @ManyToOne(type => Words)
    wordTo: Words;

    @Column()
    Student_ID: number;

    @Column()
    Student_IP: string;

}
