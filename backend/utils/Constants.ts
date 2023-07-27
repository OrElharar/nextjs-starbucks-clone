export abstract class Constants {
    public static AUTHENTICATION_FAILED_MESSAGE : string = "Access denied";
    public static AUTHENTICATION_MISSING_PARAMS_MESSAGE : string = "Missing username or password";
    public static TOKEN_EXPIRES_IN_NUMBER_OF_SECONDS : number = 12 * 60 * 60 ;
    public static USER_ID_HEADER : string = "x-user-id";
    public static AUTHENTICATION_HEADER = 'x-authorization'
}

