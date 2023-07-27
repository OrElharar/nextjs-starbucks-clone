import {useState} from "react";
import {AlertStatus, IAlertStatus} from "@/app/contexts/alert/AlertStatus";


export function useAlert(){
    const defaultTimeOutInSec = 3;
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

    return {alert, alertText, success, error, clear};
}
