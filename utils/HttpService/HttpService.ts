import {IHttpService} from "@/utils/HttpService/IHttpService";
import fetchHandler, {IFetchHandler} from "@/utils/HttpService/FetchHandler";
import {IHttpResponse} from "@/utils/HttpService/IHttpResponse";
import {IUserDTO} from "@/entities/interfaces/user";

export class HttpService implements IHttpService {
    private fetchHandler: IFetchHandler;
    private defaultErrorMessage = 'Error';
    private mainApiUrl = 'http://localhost:4000/api/v1';

    constructor(fetchHandler: IFetchHandler) {
        this.fetchHandler = fetchHandler;
    }
    extractErrorMessage(error: any): Error {
        if(error instanceof Error) {
            return error;
        }
        return new Error(this.defaultErrorMessage);
    }

    private verifyToken(token: string): void {
        if(token === "")
            throw new Error('Session expired, please login again');
    }

    public async login({username, password}: {username: string, password: string}): Promise<IHttpResponse<{ token: string, user: IUserDTO }>> {
        try{
            return await this.fetchHandler.post({url: `${this.mainApiUrl}/login`, data: {username, password}});
        }catch (err) {
            return {err: this.extractErrorMessage(err)};
        }
    }


}

export default new HttpService(fetchHandler);
