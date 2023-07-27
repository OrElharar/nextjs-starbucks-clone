import {IUserLoggedIn, IUserLoginInput, IUserSignInInput} from "@/entities/interfaces/user";

export interface ILoginContextState {
    loggedUser: IUserLoggedIn | null;
    isLoading: boolean;
    error: string | null;
    login: (userLoginInput: IUserLoginInput) => Promise<void>;
    signIn: (userSignInInput: IUserSignInInput) => Promise<void>;
    logout: (token: string) => Promise<void>;
}

export const defaultLoginContextState: ILoginContextState = {
    loggedUser: null,
    isLoading: false,
    error: null,
    login: async (userLoginInput: IUserLoginInput) => {},
    signIn: async (userSignInInput: IUserSignInInput) => {},
    logout: async (token: string) => {},
}
