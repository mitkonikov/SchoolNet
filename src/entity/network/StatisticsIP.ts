import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index } from "typeorm";

@Entity({ name: "tbl_stats_ip" })
@Index(["Student_IP"])
export class StatisticsIP extends BaseEntity {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Student_IP: string;

    @Column({ type: 'smallint', default: 0 })
    Word_Contributions: string;

    @Column({ type: 'smallint', default: 0 })
    Connect_Contributions: string;
    
}