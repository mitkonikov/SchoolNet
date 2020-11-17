import { Entity, PrimaryGeneratedColumn, Column, Index, BaseEntity } from "typeorm";

@Entity({ name: "tbl_subjects" })
export class Subject extends BaseEntity {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column({ type: "tinyint", width: 4 })
    Subject_ID: number;

    @Column({ default: 0 })
    Count_Questions: number;

}
