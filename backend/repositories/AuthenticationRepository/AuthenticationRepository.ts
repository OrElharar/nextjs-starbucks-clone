import {DbAdapter } from "../../storage/postgres/DbAdapter";
import { CustomError } from "../../models/CustomError";
import {Constants} from "@/backend/utils/Constants";
import * as queries from "./queries";
import dbClient from "@/backend/storage/postgres/dbClient";

export class AuthenticationRepository {
    private dbClient: DbAdapter;

    constructor(dbClient: DbAdapter) {
        this.dbClient = dbClient;
    }

    getUserAuthData = async (username: string): Promise<{ id: string; hashedPassword: string, firstName: string, lastName: string }> => {
        const sqlQuery = queries.getSelectUserAuthDataQuery();
        const response = await this.dbClient.callDbCmd(sqlQuery, [username]);
        if (response.rowCount !== 1) {
            throw new CustomError(Constants.AUTHENTICATION_FAILED_MESSAGE);
        }
        return response.rows[0];
    };
}

export default new AuthenticationRepository(dbClient);
