import {IValidationResponse} from "@/entities/interfaces/validationResponse";

export interface IValidation {
    validateEmail(email: string): IValidationResponse;
    validatePassword(password: string): IValidationResponse;
    validateRequiredText(text: string): IValidationResponse;
}

class Validation implements IValidation{

    getInvalidEmailMessage(email: string): string{
        return  email == null || email.length === 0 ? "Email is required" : "Invalid email";
    }

    getInvalidPasswordMessages(password: string): string[]{
        const smallLetterRegex = new RegExp("[a-z]");
        const capitalLetterRegex = new RegExp("[A-Z]");
        const numberRegex = new RegExp("[0-9]");

        const isMissingSmallLetter = !smallLetterRegex.test(password);
        const isMissingCapitalLetter = !capitalLetterRegex.test(password);
        const isMissingNumber = !numberRegex.test(password);
        const isLengthLessThan8 = password.length < 8;
        const messages = [];
        if(isMissingSmallLetter){
            messages.push("At least one small letter is required");
        }
        if(isMissingCapitalLetter){
            messages.push("At least one capital letter is required");
        }
        if(isMissingNumber){
            messages.push("At least one number is required");
        }
        if(isLengthLessThan8){
            messages.push("Length should be at least 8");
        }
        return messages;
    }

    validateEmail(email: string): IValidationResponse{
        const emailRegex = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
        const isValid = emailRegex.test(email);
        const messages = isValid ? [] : [this.getInvalidEmailMessage(email)];
        return {isValid, messages};
    }

    validatePassword(password: string): IValidationResponse{
        const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
        const isValid = passwordRegex.test(password);
        const messages = isValid ? [] : this.getInvalidPasswordMessages(password);
        return {isValid, messages};
    }

    validateRequiredText(text: string): IValidationResponse{
        const isValid = text != null && text.length > 0;
        const messages = isValid ? []: ["This field is required"];
        return {isValid, messages};
    }
}

export default new Validation();
