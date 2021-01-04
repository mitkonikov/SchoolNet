import { BaseEntity, Column, Index, PrimaryGeneratedColumn } from "typeorm";

@Index(["User_ID", "Variable"])
export class BaseStats extends BaseEntity {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    User_ID: number;

    @Column()
    Variable: string;

    @Column()
    Data: string;
}