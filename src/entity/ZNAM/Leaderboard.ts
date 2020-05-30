import { Entity, PrimaryGeneratedColumn, Column, Index, BaseEntity } from "typeorm";

@Entity({ name: "tbl_leaderboard" })
@Index(["Rank"])
@Index(["Score", "Rank"])
export class Leaderboard extends BaseEntity {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Rank: number;

    @Column()
    Score: number;

    @Column()
    Student_ID: number;

    @Column()
    Rating: number;

    @Column()
    Q_Correct: number;

    @Column()
    Q_Wrong: number;
}
