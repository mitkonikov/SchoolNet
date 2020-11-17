import { Entity, PrimaryGeneratedColumn, Column, Index, BaseEntity } from "typeorm";

@Entity({ name: "tbl_words" })
@Index(["Mistake", "Word_Text"])
export class Word extends BaseEntity {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Word_Text: string;

    @Column()
    Type: number;

    @Column({ type: "text" })
    Occurrences: string;

    @Column({ type: "tinyint", width: 1 })
    Mistake: boolean;

    @Column()
    Wiki_Frq: number;
}
