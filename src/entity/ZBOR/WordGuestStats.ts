import { Entity, PrimaryGeneratedColumn, Column, Index, BaseEntity } from "typeorm";

@Entity({ name: "tbl_guests_stats" })
@Index(["User_ID", "Variable"])
export class WordGuestStats extends BaseEntity {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    User_ID: number;

    @Column()
    Variable: string;

    @Column()
    Data: string;

}
