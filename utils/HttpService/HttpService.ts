import {IHttpService} from "@/utils/HttpService/IHttpService";
import fetchHandler, {IFetchHandler} from "@/utils/HttpService/FetchHandler";
import {IHttpResponse} from "@/utils/HttpService/IHttpResponse";
import {IUserDTO, IUserSignInInput} from "@/entities/interfaces/user";
import {IBanner} from "@/entities/interfaces/banner";
import {Constants} from "@/backend/utils/Constants";

export class HttpService implements IHttpService {
    private fetchHandler: IFetchHandler;
    private defaultErrorMessage = 'Error';

    constructor(fetchHandler: IFetchHandler) {
        this.fetchHandler = fetchHandler;
    }
    extractErrorMessage(error: any): Error {
        if(error instanceof Error) {
            return error;
        }
        if(error?.error?.message != null)
            return new Error(error.error.message);
        return new Error(this.defaultErrorMessage);
    }

    private verifyToken(token: string): void {
        if(token === "")
            throw new Error('Session expired, please login again');
    }

    async login({ username, password }: { username: string; password: string }): Promise<IHttpResponse<{ token: string; user: IUserDTO }>> {
        try {
            const response = await fetch("/api/registration/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                return { err: this.extractErrorMessage(errorData) };
            }
            const data = await response.json();
            return { data: data.data };
        } catch (err) {
            return { err: this.extractErrorMessage(err) };
        }
    }

    async logout(token: string): Promise<IHttpResponse<void>> {
        try {
            const response = await fetch("/api/registration/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    [Constants.AUTHENTICATION_HEADER]: token
                }
            });
            if (!response.ok) {
                const errorData = await response.json();
                return { err: this.extractErrorMessage(errorData) };
            }
            return { data: undefined };
        } catch (err) {
            return {err: this.extractErrorMessage(err)};
        }
    }

    async signIn(data: IUserSignInInput): Promise<IHttpResponse<{ token: string; user: IUserDTO }>> {
        try {
            const response = await fetch("/api/registration/sign-in", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                const errorData = await response.json();
                return { err: this.extractErrorMessage(errorData) };
            }
            const jsonData = await response.json();
            return { data: jsonData.data };
        } catch (err) {
            return { err: this.extractErrorMessage(err) };
        }
    }

    async getBanners(): Promise<IHttpResponse<IHttpResponse<{ banners: IBanner[] }>>> {
        try {
            const response = await fetch("/api/banners");
            if (!response.ok) {
                const errorData = await response.json();
                return { err: errorData.message };
            }
            const data = await response.json();
            return { data };
        } catch (err) {
            return { err: this.extractErrorMessage(err) };
        }
    }

    async clickBanner(data: {bannerId: string, position: number}) : Promise<IHttpResponse<void>>{
        try {
            const response = await fetch("/api/banners/clicks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                const errorData = await response.json();
                return { err: errorData.message };
            }
            return { data: undefined };
        } catch (err) {
            return { err: this.extractErrorMessage(err) };
        }
    }

}

export default new HttpService(fetchHandler);
