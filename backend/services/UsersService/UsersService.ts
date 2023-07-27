import usersRepository from "@/backend/repositories/UsersRepository/UsersRepository";
import {CustomError} from "@/backend/models/CustomError";
import bcrypt from "bcrypt";
import {IUserDTO, IUserSignInInput} from "@/entities/interfaces/user";
import validation, {IValidation} from "@/utils/Validation";
import {IUsersRepository} from "@/backend/repositories/UsersRepository/IUsersRepository";
import {IUsersService} from "@/backend/services/UsersService/IUsersService";


class UsersService implements IUsersService {
        static encryptionHandler = bcrypt
        private usersRepository: IUsersRepository;
        private validation: IValidation;

    constructor({usersRepository, validation}: {usersRepository: IUsersRepository, validation: IValidation}) {
        this.usersRepository = usersRepository;
        this.validation = validation;
    }

    private async getEncryptedPassword(password: string){
        return await UsersService.encryptionHandler.hash(password, 12);
    }

    createUser = async ({username, password, lastName, firstName}:IUserSignInInput): Promise<IUserDTO> => {
        if(!username || !password || !lastName || !firstName)
            throw new CustomError("Username, password, first name and last name are required");
        const passwordValidation = this.validation.validatePassword(password);
        if(!passwordValidation.isValid)
            throw new CustomError(passwordValidation.messages.join(", "));
        const emailValidation = this.validation.validateEmail(username);
        if(!emailValidation.isValid)
            throw new CustomError(emailValidation.messages.join(", "));

        const hashedPassword = await this.getEncryptedPassword(password);
        const user = await this.usersRepository.insertUser({username, hashedPassword, firstName, lastName});
        if(!user)
            throw new CustomError("User creation failed");
        return user;
    }
}

export default new UsersService({usersRepository, validation});
