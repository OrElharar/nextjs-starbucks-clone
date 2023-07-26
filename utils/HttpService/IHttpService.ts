import {IHttpResponse} from "./IHttpResponse";

export interface IHttpService {
    login: ({username, password}: {username: string, password: string}) => Promise<IHttpResponse<any>>;
}
