import { Entity, PrimaryGeneratedColumn, Column, Index, BaseEntity } from "typeorm";

@Entity({ name: "tbl_guests" })
@Index(["Cookie"])
export class Guest extends BaseEntity {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Cookie: string;

    @Column()
    IP: string;

    @Column({ type: "tinyint", width: 1 })
    Mobile: boolean;

    @Column({ default: "" })
    Display_Name: string;

    @Column()
    Expires: number;

}
