import { Entity, PrimaryGeneratedColumn, Column, Index, BaseEntity } from "typeorm";

@Entity({ name: "tbl_leaderboard" })
export class StudentStats extends BaseEntity {

    @PrimaryGeneratedColumn()
    ID: number;

    @Index()
    @Column()
    Student_ID: number;

    @Column({ default: 0 })
    Questions_Played: number;

    @Column({ default: 0 })
    Contributions: number;

}
