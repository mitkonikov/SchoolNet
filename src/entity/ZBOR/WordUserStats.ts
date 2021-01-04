import { Entity } from "typeorm";
import { BaseStats } from "../network/BaseStats";

@Entity({ name: "tbl_user_stats" })
export class WordUserStats extends BaseStats {
    
}