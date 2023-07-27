import {IUserDTO} from "@/entities/interfaces/user";

export interface IAuthenticationService {
    authenticate: ({username, password}: {username: string, password: string}) => Promise<IUserDTO>;
    generateControlPanelToken: (userId: string) => string;
    extractUserFromToken: (token: string) => Promise<string>;
    extractDecodedFromToken: (token: string) => any;
}
