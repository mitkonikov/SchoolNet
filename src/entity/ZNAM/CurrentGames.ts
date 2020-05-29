import { Entity, PrimaryGeneratedColumn, Column, Index, BaseEntity } from "typeorm";

@Entity({ name: "tbl_current_games" })
@Index(["Student_ID"])
export class CurrentGames extends BaseEntity {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Student_ID: number;

    @Column({ type: "text" })
    Questions: string;

    @Column({ type: "tinyint", width: 4 })
    Current_Level: number;

    @Column({ type: "smallint", width: 6 })
    Score: number;

    @Column({ type: "tinyint", width: 4 })
    Time_Left: number;

    @Column({ type: "tinyint", width: 4 })
    Status: number;

    @Column({ type: "tinyint", width: 4 })
    Subject: number;

    @Column({ type: "text" })
    Demo_ID: string;

    @Column({ type: "tinyint", width: 4, default: 1 })
    Rated: number;

    @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP"})
    Timestamp: string;

}
