import {DdCommand} from "./DdCommand";
import {IDbResponse} from "@/backend/interfaces/DbResponse";
import { db } from "@vercel/postgres";
import {getTablesCreationScript} from "@/backend/storage/postgres/tables";
import logger from "@/backend/utils/Logger";

export class DbAdapter {
    constructor() {
        this.up()
            .then(res => logger.info("Postgres up"))
            .catch(err => logger.error("Postgres down, error: "+err.message));
    }
    async up(){
        try {
            const client = await db.connect();
            await client.query(`${getTablesCreationScript()}`);
        }catch (err){
            throw err;
        }
    }
    async callDbCmd(sqlQuery: string, values: any[] = []) {
        try {
            return await db.query(sqlQuery, values);
        } catch (err) {
            throw err;
        }
    }

    async callDb(dbCommand: DdCommand){
        const client = await db.connect();
        try{
            return await client.query(dbCommand.query, dbCommand.values) ;
        } catch(err) {
            throw err;
        }
        finally {
            await client.release();
        }
    }
    async callDbTransaction (queriesArr: string[], valuesArr: any[][]){
        if(queriesArr.length !== valuesArr.length)
            throw new Error("queriesArr.length !== valuesArr.length in callDbTransactionCmd")
        const client = await db.connect();
        try{
            const response: IDbResponse = {}
            await client.query('BEGIN ');
            for(let i =0; i< queriesArr.length; i++){
                response[i] = await client.query(queriesArr[i], valuesArr[i]);
            }
            await client.query('COMMIT ');
            return response;
        }catch(err){
            await client.query('ROLLBACK');
            throw err
        }
        finally {
            await client.release();
        }
    }

    async callDbTransactionCmd (dbCommands: DdCommand[]){
        if(dbCommands.length === 0)
            throw new Error("dbCommands' length must be greater then 0");

        const client = await db.connect();
        try{
            const response: IDbResponse = {}
            await client.query('BEGIN ');
            for(let i =0; i< dbCommands.length; i++){
                response[i] = await client.query(dbCommands[i].query, dbCommands[i].values);
            }
            await client.query('COMMIT ');
            return response;
        }catch(err){
            await client.query('ROLLBACK');
            throw err
        }
        finally {
            await client.release();
        }
    }
    async testConnection(){
        try{
            await this.callDbCmd("SELECT NOW()");
            return true;
        }catch(err){
            return false;
        }
    }
}




