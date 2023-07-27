'use client';
import StarExplanation from "@/app/components/general/StarExplanation/StarExplanation";
import React, {useEffect} from "react";
import Input from "@/app/components/general/input/Input";
import validation from "@/utils/Validation";
import CustomCheckBox from "@/app/components/general/CustomCheckBox/CustomCheckBox";
import classes from "./SignInForm.module.scss";
import messages from "@/public/messages.json";
import {ISignInFormProps} from "@/app/account/sign-in/components/SignInForm/props";

export default function SignInForm({login}:ISignInFormProps) {
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
                label={messages.email}
                isRequired={true}
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                validate={(value)=> validation.validateRequiredText(value)}
            />
            <Input
                type="password"
                label={messages.password}
                isRequired={true}
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                validate={(value)=> validation.validateRequiredText(value)}
            />
            <CustomCheckBox
                isMarked={shouldKeepUserLoggedIn}
                setValue={setShouldKeepUserLoggedIn}
                description={messages.keepMeLoggedIn}
            />
            <div className={classes.forgotPasswordContainer}
                onClick={()=>setIsPasswordForgotten(true)}>
                {messages.forgotPasswordQuestion}
            </div>

            <div className={classes.signInButtonContainer}>
                <button
                    disabled={email === "" || password === ""}
                    onClick={()=>{
                        login({
                            username: email,
                            password
                        })
                }}>
                    {messages.signIn}
                </button>
            </div>

        </div>
    )
}
