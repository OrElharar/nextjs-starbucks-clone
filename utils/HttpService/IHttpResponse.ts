
export interface IHttpResponse<T> {
    data?: T | null;
    err?: Error | null;
}
