import {IUserLoggedIn} from "@/entities/interfaces/user";

export interface INavigationProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    loggedUser: IUserLoggedIn | null;
    logout: (token: string) => Promise<void>;
}
