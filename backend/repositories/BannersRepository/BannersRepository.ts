import {DbAdapter} from "@/backend/storage/postgres/DbAdapter";
import {IBanner} from "@/entities/interfaces/banner";
import * as queries from "./queries";
import dbClient from "@/backend/storage/postgres/dbClient";

export class BannersRepository{
    private dbClient: DbAdapter;
    constructor(dbClient: DbAdapter) {
        this.dbClient = dbClient;
    }

    async getAll(): Promise<IBanner[]>{
        const selectBannersQuery = queries.getSelectBannersQuery();
        const response = await this.dbClient.callDbCmd(selectBannersQuery);
        return response.rows as IBanner[];
    }

    async insertBannerClick({bannerId, position}: {bannerId: string, position: number}): Promise<void>{
        const addBannerClickQuery = queries.getInsertBannerClickQuery();
        await this.dbClient.callDbCmd(addBannerClickQuery, [bannerId, position]);
    }
}

export const bannersRepository = new BannersRepository(dbClient);
