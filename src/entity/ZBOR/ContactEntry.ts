import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity({ name: "tbl_contact" })
export class ContactEntry extends BaseEntity {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column({ type: "text" })
    Contact: string;

    @Column({ default: -1 })
    Student_ID: number;

    @Column()
    Student_IP: string;

}
