import * as queries from "./queries";
import {DbAdapter} from "@/backend/storage/postgres/DbAdapter";
import {IUserDTO} from "@/entities/interfaces/user";
import dbClient from "@/backend/storage/postgres/dbClient";
import {IUsersRepository} from "@/backend/repositories/UsersRepository/IUsersRepository";
import {isPgError} from "@/backend/storage/postgres/PgError";
import {CustomError} from "@/backend/models/CustomError";

class UsersRepository implements IUsersRepository{
    private dbClient: DbAdapter;

    constructor(dbClient: DbAdapter) {
        this.dbClient = dbClient;
    }

    insertUser = async ({username, hashedPassword, firstName, lastName}:
                            {username: string, hashedPassword: string, firstName: string, lastName: string}): Promise<IUserDTO> => {
        try{
            const sqlQuery = queries.getInsertUserQuery();
            const response = await this.dbClient.callDbCmd(sqlQuery, [username, hashedPassword, firstName, lastName]);
            return response.rows[0];
        }
        catch(err){
            throw isPgError(err) && err.constraint === "users_pkey" ? new CustomError("Email already registered to the system, forgot password?") : err;
        }
    }
}

export default new UsersRepository(dbClient);
