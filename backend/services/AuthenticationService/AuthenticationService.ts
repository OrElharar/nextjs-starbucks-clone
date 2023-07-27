import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import authenticationRepository from "@/backend/repositories/AuthenticationRepository/AuthenticationRepository";
import {Constants} from "@/backend/utils/Constants";
import {CustomError} from "@/backend/models/CustomError";
import {IUserDTO} from "@/entities/interfaces/user";
import {IAuthenticationRepository} from "@/backend/repositories/AuthenticationRepository/IAuthenticationRepository";
import {IAuthenticationService} from "@/backend/services/AuthenticationService/IAuthenticationService";



class AuthenticationService implements IAuthenticationService{
    private authenticationRepository: IAuthenticationRepository;
    private secret: string;

    constructor({authenticationRepository, secret}: {authenticationRepository: IAuthenticationRepository, secret: string}) {
        this.authenticationRepository = authenticationRepository;
        this.secret = secret;
    }

    extractDecodedFromToken = (token: string): any => {
        return jwt.verify(token, this.secret);
    };

    extractUserFromToken = async (token: string): Promise<string> => {
        const decoded = this.extractDecodedFromToken(token);
        return decoded.userId;
    };

    authenticate = async ({username, password}: {username: string, password: string}): Promise<IUserDTO> => {
       if (!username || !password) {
           throw new CustomError(Constants.AUTHENTICATION_MISSING_PARAMS_MESSAGE)
       }
       const user = await this.authenticationRepository.getUserAuthData(username);
       const validPassword = await bcrypt.compare(password, user.hashedPassword);
       if(user.id == null)
           throw new CustomError(Constants.AUTHENTICATION_FAILED_MESSAGE);
       if (!validPassword)
           throw new CustomError(Constants.AUTHENTICATION_FAILED_MESSAGE);
       return {
           id: user.id,
           firstName: user.firstName,
           lastName: user.lastName
       };
    };

    generateControlPanelToken = (userId: string) => {
        const sessionInfo = { userId };
        return 'JWT ' + jwt.sign(sessionInfo, this.secret, {
            expiresIn: Constants.TOKEN_EXPIRES_IN_NUMBER_OF_SECONDS
        });
    };
}

export default new AuthenticationService({authenticationRepository, secret: process.env.JWT_SECRET || ""});
