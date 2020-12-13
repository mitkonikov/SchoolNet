import { Entity, PrimaryGeneratedColumn, Column, Index, BaseEntity } from "typeorm";

@Entity({ name: "tbl_words" })
@Index(["Mistake", "Word_Text"])
export class Word extends BaseEntity {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Word_Text: string;

    @Column({ default: 0 })
    Type: number;

    @Column({ type: "text", nullable: true })
    Occurrences: string;

    @Column({ type: "tinyint", width: 1, default: false })
    Mistake: boolean;

    @Column({ default: 0 })
    Wiki_Frq: number;
}
