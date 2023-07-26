import pg from "pg";
import {DdCommand} from "./DdCommand";
import {IDbResponse} from "@/backend/interfaces/DbResponse";
// import { createClient } from '@vercel/postgres';

export class PostgresAdapter{
    private pgPool: pg.Pool;

    constructor({host, database, user, password, max=25, min=4, connectionTimeoutMillis=10000}:
                    {host: string, database: string, user: string, password: string, max: number, min: number, connectionTimeoutMillis: number}) {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        console.log({pg})
        this.pgPool = new pg.Pool({host, database, user, password, max, min, connectionTimeoutMillis})
    }
    async callDbCmd(sqlQuery: string, values:any[] =[]){
        const client = await this.pgPool.connect();
        try{
            return await client.query(sqlQuery, values) ;
        } catch(err) {
            throw err;
        }
        finally {
            await client.release();
        }
    }

    async callDb(dbCommand: DdCommand){
        const client = await this.pgPool.connect();
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
        const client = await this.pgPool.connect();
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

        const client = await this.pgPool.connect();
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
            console.log("In Test Connection")
            await this.callDbCmd("SELECT NOW()");
            return true;
        }catch(err){
            console.log("Postgres connection error: ", err)
            return false;
        }
    }
}




