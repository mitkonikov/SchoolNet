import { Entity } from "typeorm";
import { BaseStats } from "../network/BaseStats";

@Entity({ name: "tbl_guests_stats" })
export class WordGuestStats extends BaseStats {
    
}