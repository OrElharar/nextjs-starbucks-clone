import {IUserDTO} from "@/entities/interfaces/user";

export interface IUsersRepository {
    insertUser: ({username, hashedPassword, firstName, lastName}:
                     {username: string, hashedPassword: string, firstName: string, lastName: string}) => Promise<IUserDTO>;
}
