'use client'

import React, { createContext, ReactNode } from 'react';
import {defaultAlertContextState, IAlertContextState} from "@/app/contexts/alert/IAlertContextState";
import {useAlert} from "@/app/hooks/alert";




const AlertContext = createContext<IAlertContextState>(defaultAlertContextState);

const AlertContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const {alert, alertText, success, error, clear, methodNotImplemented, announceActivityTracked } = useAlert();

    return (
        <AlertContext.Provider value={{ alert, alertText, success, error, clear, methodNotImplemented, announceActivityTracked }}>
            {children}
        </AlertContext.Provider>
    );
};

export default AlertContextProvider;
export { AlertContext };
