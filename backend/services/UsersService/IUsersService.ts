import {IUserDTO, IUserSignInInput} from "@/entities/interfaces/user";

export interface IUsersService {
    createUser: ({username, password, lastName, firstName}:IUserSignInInput) => Promise<IUserDTO>;
}
