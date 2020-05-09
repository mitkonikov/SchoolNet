import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity({ name: "tbl_contact" })
export class ContactEntry extends BaseEntity {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Student_ID: number;

    @Column({ type: "text" })
    Message: string;
}