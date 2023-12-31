
import {useContext, useEffect, useState} from "react";
import httpService from "@/utils/HttpService/HttpService";
import {IUserLoggedIn, IUserLoginInput, IUserSignInInput} from "@/entities/interfaces/user";
import {AlertContext} from "@/app/contexts/alert/AlertContext";
import messages from "@/public/messages.json";


const useUser = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [loggedUser, setLoggedUser] = useState<IUserLoggedIn | null>(null);
    const { error, success } = useContext(AlertContext);

    useEffect(() => {
        const loggedUser = localStorage.getItem("loggedUser");
        if(loggedUser != null){
            setLoggedUser(JSON.parse(loggedUser));
        }
        setIsLoading(()=> false);
    },[])

    const login = async(loginData: IUserLoginInput): Promise<void> => {
        setIsLoading(()=> true);
        const {err, data} = await httpService.login(loginData);
         if(err != null){
            setErrorMessage(err.message);
            error(err.message);
            return;
        }
        if(data?.user == null || data?.token == null){
            setErrorMessage(messages.defaultErrorMessage);
            return;
        }
        const loggedUser: IUserLoggedIn = {
            user: data.user,
            token: data.token
        }
        setLoggedUser(loggedUser);
        localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
        success();
    }

    const logout = async(token: string): Promise<void> => {
        setIsLoading(()=> true);
        const {err, data} = await httpService.logout(token);
        if(err != null){
            setErrorMessage(err.message);
            return;
        }
        setLoggedUser(null);
        localStorage.removeItem("loggedUser");
        success();
    }

    const signIn = async(signInData: IUserSignInInput): Promise<void> => {
        setIsLoading(()=> true);
        const {err, data} = await httpService.signIn(signInData);
        if(err != null){
            setErrorMessage(err.message);
            error(err.message);
            return;
        }
        if(data?.user == null || data?.token == null){
            setErrorMessage(messages.defaultErrorMessage);
            return;
        }
        setLoggedUser({
            user: data.user,
            token: data.token
        });
        localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
        success();
    }

    return {isLoading, error: errorMessage, loggedUser, login, signIn, logout};
}

export default useUser;
