export interface IUserLoginInput {
    username: string;
    password: string;
}

export interface IUserDTO {
    id: string;
}

export interface IUserLoggedIn{
    token: string;
    user: IUserDTO;
}
