import { Entity, PrimaryGeneratedColumn, Column, Index, BaseEntity } from "typeorm";

@Entity({ name: "tbl_activities" })
@Index(["Student_ID"])
export class Activity extends BaseEntity {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Student_ID: number;

    @Column({ type: "tinyint", width: 4 })
    Subject: number;

    @Column()
    Time: number;

    @Column()
    Score: number;

    @Column({ type: "text" })
    Statistics: string;

    @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP"})
    Timestamp: string;

}
