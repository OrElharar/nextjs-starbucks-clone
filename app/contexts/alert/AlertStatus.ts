export abstract class AlertStatus {
    public static None :IAlertStatus = "NONE";
    public static Success: IAlertStatus = "SUCCESS";
    public static Error: IAlertStatus = "ERROR";
}

export type IAlertStatus = "NONE" | "SUCCESS" | "ERROR";
