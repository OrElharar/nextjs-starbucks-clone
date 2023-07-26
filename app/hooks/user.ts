import {useState} from "react";
import httpService from "@/utils/HttpService/HttpService";
import {IUserLoggedIn, IUserLoginInput} from "@/entities/interfaces/user";

const defaultErrorMessage = 'Error';

const useUser = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [user, setUser] = useState<IUserLoggedIn | null>(null);

    const login = async(loginData: IUserLoginInput): Promise<void> => {
        setIsLoading(()=> true);
        const {err, data} = await httpService.login(loginData);
        if(err != null){
            setError(err.message);
            return;
        }
        if(data?.user == null || data?.token == null){
            setError(defaultErrorMessage);
            return;
        }
        setUser({
            user: data.user,
            token: data.token
        });
    }

    return {isLoading, error, user, login};
}

export default useUser;
