'use client'

import React, { createContext } from 'react';
import {defaultLoginContextState, ILoginContextState} from "@/app/contexts/login/LoginContextState";
import useUser from "@/app/hooks/user";


export const LoginContext = createContext<ILoginContextState>(defaultLoginContextState);

export const LoginContextProvider = ({ children }: { children: React.ReactNode }) => {
    const {isLoading, error, loggedUser, login, signIn, logout} = useUser();

    return (
        <LoginContext.Provider value={{ isLoading, error, loggedUser, login, signIn, logout }}>
            {children}
        </LoginContext.Provider>
    );
};


export default LoginContextProvider;
