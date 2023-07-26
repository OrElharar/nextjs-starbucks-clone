'use client'

import React, { createContext } from 'react';
import {defaultLoginState, ILoginState} from "@/app/contexts/login/LoginState";
import useUser from "@/app/hooks/user";


export const LoginContext = createContext<ILoginState>(defaultLoginState);

export const LoginContextProvider = ({ children }: { children: React.ReactNode }) => {
    const {isLoading, error, user, login} = useUser();

    return (
        <LoginContext.Provider value={{ isLoading, error, user, login }}>
            {children}
        </LoginContext.Provider>
    );
};


export default LoginContextProvider;
