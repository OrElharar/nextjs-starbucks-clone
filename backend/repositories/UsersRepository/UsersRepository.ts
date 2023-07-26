import * as queries from "./queries";
import {DbAdapter} from "@/backend/storage/postgres/DbAdapter";
import {IUserDTO} from "@/entities/interfaces/user";
import dbClient from "@/backend/storage/postgres/dbClient";

export class UsersRepository {
    private dbClient: DbAdapter;

    constructor(dbClient: DbAdapter) {
        this.dbClient = dbClient;
    }

    insertUser = async ({username, hashedPassword, firstName, lastName}:
                            {username: string, hashedPassword: string, firstName: string, lastName: string}): Promise<IUserDTO> => {
        const sqlQuery = queries.getInsertUserQuery();
        const response = await this.dbClient.callDbCmd(sqlQuery, [username, hashedPassword, firstName, lastName]);
        return response.rows[0];
    }
}

export default new UsersRepository(dbClient);
