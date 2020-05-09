import { Entity, PrimaryGeneratedColumn, Column, Index, BaseEntity } from "typeorm";

@Entity({ name: "tbl_questions" })
@Index(["Valid", "Subject"])
export class Question extends BaseEntity {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column({ type: "tinyint", width: 4 })
    Subject: number;

    @Column({ type: "text" })
    Question: string;

    @Column({ type: "text" })
    Answer_1: string;

    @Column({ type: "text" })
    Answer_2: string;
    
    @Column({ type: "text" })
    Answer_3: string;
    
    @Column({ type: "text" })
    Answer_4: string;

    @Column({ type: "tinyint", width: 4 })
    Truth: number;

    @Column({ type: "smallint", width: 6 })
    Rating: number;

    @Column({ type: "tinyint", width: 1 })
    Valid: boolean;

    @Column({ type: "text" })
    Origin: string;

    @Column({ type: "text" })
    Origin_Info: string;

    @Column()
    Played: number;

    @Column()
    Got_Corrent: number;

    @Column({ type: "tinyint", width: 1, default: 1 })
    Rated: boolean;
}
