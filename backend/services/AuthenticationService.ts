import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import { PostgresAdapter } from "../storage/postgres/PostgresAdapter";
import authenticationRepository, {AuthenticationRepository} from "@/backend/repositories/AuthenticationRepository/AuthenticationRepository";
import {Constants} from "@/backend/utils/Constants";
import {CustomError} from "@/backend/models/CustomError";
import {throws} from "assert";

export class AuthenticationService {
    private authenticationRepository: AuthenticationRepository;
    private secret: string;

    constructor({authenticationRepository, secret}: {authenticationRepository: AuthenticationRepository, secret: string}) {
        console.log("2")
        this.authenticationRepository = authenticationRepository;
        this.secret = secret;
    }

    extractDecodedFromToken = (token: string): any => {
        return jwt.verify(token, this.secret);
    };

    getTokenFromHeader = (headers: string | string[] | undefined): string => {
        if (Array.isArray(headers)) {
            return headers[0].replace("JWT ", "");
        } else if (typeof headers === "string") {
            return headers.replace("JWT ", "");
        }
        return "";
    };

    extractUserFromToken = async (token: string): Promise<string> => {
        const decoded = this.extractDecodedFromToken(token);
        return decoded.userId;
    };

    authenticate = async ({username, password}: {username: string, password: string}): Promise<string> => {
       if (!username || !password) {
           throw new CustomError(Constants.AUTHENTICATION_MISSING_PARAMS_MESSAGE)
       }
       const user = await this.authenticationRepository.getUserAuthData(username);
       const validPassword = await bcrypt.compare(password, user.hashedPassword);
       if(user.id == null)
           throw new CustomError(Constants.AUTHENTICATION_FAILED_MESSAGE);
       if (!validPassword)
           throw new CustomError(Constants.AUTHENTICATION_FAILED_MESSAGE);
       return user.id;
    };

    generateControlPanelToken = (userId: string) => {
        const sessionInfo = { userId };
        return 'JWT ' + jwt.sign(sessionInfo, this.secret, {
            expiresIn: Constants.TOKEN_EXPIRES_IN_NUMBER_OF_SECONDS
        });
    };
}

export default new AuthenticationService({authenticationRepository, secret: process.env.JWT_SECRET || ""});
