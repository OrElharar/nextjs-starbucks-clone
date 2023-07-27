import {AlertStatus} from "@/app/contexts/alert/AlertStatus";

export interface IAlertContextState {
    alert: AlertStatus;
    alertText: string | null;
    success: (text?: string, timeout?: number) => void;
    error: (text: string, timeout?: number) => void;
    clear: () => void;
}

export const defaultAlertContextState: IAlertContextState = {
    alert: AlertStatus.None,
    alertText: null,
    success: (text?: string, timeout?: number) => {},
    error: (text: string, timeout?: number) => {},
    clear: () => {}
}
