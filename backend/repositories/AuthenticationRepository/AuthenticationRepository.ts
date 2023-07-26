import {PostgresAdapter } from "../../storage/postgres/PostgresAdapter";
import { CustomError } from "../../models/CustomError";
import {Constants} from "@/backend/utils/Constants";
import * as queries from "./queries";
import pgClient from "@/backend/storage/postgres/pgClient";

export class AuthenticationRepository {
    private dbClient: PostgresAdapter;

    constructor(dbClient: PostgresAdapter) {
        console.log("1")
        console.log(dbClient)
        this.dbClient = dbClient;
    }

    getUserAuthData = async (username: string): Promise<{ id: string; hashedPassword: string }> => {
        const sqlQuery = queries.getSelectUserAuthDataQuery();
        await this.dbClient.testConnection();
        const response = await this.dbClient.callDbCmd(sqlQuery, [username]);
        if (response.rowCount !== 1) {
            throw new CustomError(Constants.AUTHENTICATION_FAILED_MESSAGE);
        }
        return response.rows[0];
    };
}

export default new AuthenticationRepository(pgClient);
