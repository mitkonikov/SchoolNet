import { Connection } from "typeorm"
import { User } from "../entity/network/User"

export const redirect = {
    znam: 'ZNAM',
    frame: 'FRAME',
    zbor: 'ZBOR'
}

export const siteRedirect = {
    '/': 'https://schoolnet.mk/',
    FRAME: 'https://schoolnet.mk/',
    ZNAM: 'https://znam.schoolnet.mk/',
    ZBOR: 'https://zbor.schoolnet.mk/'
}

/**
 * Empties out the redirect for a specific user
 * @param connection Network Connection to the database
 * @param userId User ID
 */
export const deleteRedirect = async (connection: Connection, userId: number) => {
    await connection.getRepository(User).update({ ID: userId }, { Redirect: "" });
}