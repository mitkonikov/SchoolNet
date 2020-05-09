import { Entity, PrimaryGeneratedColumn, Column, Index, BaseEntity, ManyToOne } from "typeorm";
import { Words } from "./Words";

@Entity({ name: "tbl_contributions" })
export class WordContribution extends BaseEntity {

    @PrimaryGeneratedColumn()
    ID: number;

    @ManyToOne(type => Words)
    Word: Words;

    @Column()
    Student_ID: number;

    @Column()
    Student_IP: string;

    @Column({ type: "tinyint", width: 4 })
    Type: number;

    @Column({ type: "tinyint", width: 1 })
    Mistake: boolean;

}
