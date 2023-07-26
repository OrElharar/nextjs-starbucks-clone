'use client'

import React, { useState, createContext, ReactNode } from 'react';
import {AlertStatus, IAlertStatus} from "@/app/contexts/alert/AlertStatus";

interface IAlertContextState {
    alert: AlertStatus;
    alertText: string | null;
    success: (text?: string, timeout?: number) => void;
    error: (text: string, timeout?: number) => void;
    clear: () => void;
}

const defaultAlertContextState: IAlertContextState = {
    alert: AlertStatus.None,
    alertText: null,
    success: (text?: string, timeout?: number) => {},
    error: (text: string, timeout?: number) => {},
    clear: () => {}
}

const defaultTimeOutInSec = 3;

const AlertContext = createContext<IAlertContextState>(defaultAlertContextState);

const AlertContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [alert, setAlert] = useState<IAlertStatus>(AlertStatus.None);
    const [alertText, setAlertText] = useState<string | null>(null);
    const success = (text: string = 'Succeeded', timeout: number = defaultTimeOutInSec) => {
        setAlertText(text);
        setAlert(AlertStatus.Success);
        setTimeout(() => {
            setAlert(AlertStatus.None);
        }, timeout * 1000);
    };

    const error = (text: string = 'Failed', timeout: number = defaultTimeOutInSec) => {
        setAlertText(text);
        setAlert(AlertStatus.Error);
        setTimeout(() => {
            setAlert(AlertStatus.None);
        }, timeout * 1000);
    };

    const clear = () => {
        setAlert(AlertStatus.None);
    };

    return (
        <AlertContext.Provider value={{ alert, alertText, success, error, clear }}>
            {children}
        </AlertContext.Provider>
    );
};

export default AlertContextProvider;
export { AlertContext };
