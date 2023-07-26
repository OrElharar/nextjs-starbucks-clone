'use client'

import React, { createContext } from 'react';
import {defaultLoginState, ILoginState} from "@/app/contexts/login/LoginState";
import useUser from "@/app/hooks/user";


export const LoginContext = createContext<ILoginState>(defaultLoginState);

export const LoginContextProvider = ({ children }: { children: React.ReactNode }) => {
    const {isLoading, error, loggedUser, login, signIn, logout} = useUser();

    return (
        <LoginContext.Provider value={{ isLoading, error, loggedUser, login, signIn, logout }}>
            {children}
        </LoginContext.Provider>
    );
};


export default LoginContextProvider;
