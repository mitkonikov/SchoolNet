import { Entity, Column, Index, BaseEntity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "tbl_questions_played" })
@Index(["Student_ID", "Subject"])
export class QuestionPlayed extends BaseEntity {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Student_ID: number;

    @Column({ type: "tinyint", width: 4 })
    Subject: number;

    @Column()
    Question_ID: number;

}