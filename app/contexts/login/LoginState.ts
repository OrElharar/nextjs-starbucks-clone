import {IUserLoggedIn, IUserLoginInput} from "@/entities/interfaces/user";

export interface ILoginState {
    user: IUserLoggedIn | null;
    isLoading: boolean;
    error: string | null;
    login: (userLoginInput: IUserLoginInput) => Promise<void>;
}

export const defaultLoginState: ILoginState = {
    user: null,
    isLoading: false,
    error: null,
    login: async (userLoginInput: IUserLoginInput) => {},
}
