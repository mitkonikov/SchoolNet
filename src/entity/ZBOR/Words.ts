import { Entity, PrimaryGeneratedColumn, Column, Index, BaseEntity } from "typeorm";

@Entity({ name: "tbl_words" })
@Index(["Mistake", "Word"])
export class Words extends BaseEntity {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Word: string;

    @Column()
    Type: number;

    @Column({ type: "text" })
    Occurrences: string;

    @Column({ type: "tinyint", width: 1 })
    Mistake: boolean;

    @Column()
    Wiki_Frq: number;
}
