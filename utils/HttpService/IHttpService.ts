import {IHttpResponse} from "./IHttpResponse.ts";

export interface IHttpService {
    login: ({username, password}: {username: string, password: string}) => Promise<IHttpResponse<any>>;
}
