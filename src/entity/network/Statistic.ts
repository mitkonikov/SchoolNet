import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index } from "typeorm";

@Entity({ name: "tbl_stats" })
export class Statistic extends BaseEntity {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column({ type: 'datetime' })
    Last_Date_Login: string;

    @Column({ default: 0 })
    Successive_Logins: number;

    @Column({ default: 0 })
    Logins: number;
}