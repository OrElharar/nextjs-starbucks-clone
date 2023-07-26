'use client';
import StarExplanation from "@/app/components/general/StarExplanation/StarExplanation";
import React, {useEffect} from "react";
import Input from "@/app/components/general/input/Input";
import validation from "@/utils/Validation";
import CustomCheckBox from "@/app/components/general/CustomCheckBox/CustomCheckBox";
import classes from "./SignInForm.module.scss";

export default function SignInForm() {
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [shouldKeepUserLoggedIn, setShouldKeepUserLoggedIn] = React.useState<boolean>(false);
    const [isPasswordForgotten, setIsPasswordForgotten] = React.useState<boolean>(false);

    useEffect(()=>{
        if(isPasswordForgotten){
            alert("Not implemented yet");
            setIsPasswordForgotten(false);
        }
    },[isPasswordForgotten])

    return(
        <div className={classes.signInFormContainer}>
            <StarExplanation/>
            <Input
                type="email"
                label="Email address"
                isRequired={true}
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                validate={(value)=> validation.validateRequiredText(value)}
            />
            <Input
                type="password"
                label="Password"
                isRequired={true}
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                validate={(value)=> validation.validateRequiredText(value)}
            />
            <CustomCheckBox
                isMarked={shouldKeepUserLoggedIn}
                setValue={setShouldKeepUserLoggedIn}
                description={"I agree to the Terms of Use and Privacy Policy"}
            />
            <div className={classes.forgotPasswordContainer}
                onClick={()=>setIsPasswordForgotten(true)}>
                Forgot your password?
            </div>

            <div className={classes.signInButtonContainer}>
                <button>
                    Sign In
                </button>
            </div>

        </div>
    )
}
