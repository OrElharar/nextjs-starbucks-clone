export interface IUserLoginInput {
    username: string;
    password: string;
}

export interface IUserSignInInput {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface IUserDTO {
    id: string;
    firstName: string;
    lastName: string;
}

export interface IUserLoggedIn{
    token: string;
    user: IUserDTO;
}
