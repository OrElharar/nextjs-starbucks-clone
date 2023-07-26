'use client'

import validation from "@/utils/Validation";
import Input from "@/app/components/general/input/Input";
import React from "react";
import classes from "./NewAccountForm.module.scss";
import CustomCheckBox from "@/app/components/general/CustomCheckBox/CustomCheckBox";
import StarExplanation from "@/app/components/general/StarExplanation/StarExplanation";
import {LoginContext} from "@/app/contexts/login/LoginContext";
export default function NewAccountForm() {
    const [firstName, setFirstName] = React.useState<string>("");
    const [lastName, setLastName] = React.useState<string>("");
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [areConditionsAccepted, setAreConditionsAccepted] = React.useState<boolean>(false);

    const {signIn} = React.useContext(LoginContext);
    return(
        <div className={classes.newAccountFormContainer}>
            <section>
               <StarExplanation/>
                <h6>Personal Information</h6>
                <Input
                    type="text"
                    label="First Name"
                    isRequired={true}
                    value={firstName}
                    validate={(value)=> validation.validateRequiredText(value)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
                />
                <Input
                    type="text"
                    label="Last Name"
                    isRequired={true}
                    value={lastName}
                    validate={(value)=> validation.validateRequiredText(value)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
                />
            </section>
            <section>
                <h6>Account Security</h6>
                <Input
                    type="email"
                    label="Email"
                    isRequired={true}
                    value={email}
                    validate={(value)=> validation.validateEmail(value)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    label="Password"
                    isRequired={true}
                    value={password}
                    validate={(value)=> validation.validatePassword(value)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />
            </section>
            <section>
                <h6>TERMS OF USE</h6>
                <CustomCheckBox
                    isMarked={areConditionsAccepted}
                    setValue={setAreConditionsAccepted}
                    description={"I agree to the Terms of Use and Privacy Policy"}
                />
            </section>
            <div className={classes.createAccountButtonContainer}>
                <button
                    disabled={!areConditionsAccepted || [email, password, firstName, lastName].includes("") }
                    onClick={()=>{
                        signIn({username: email, password, firstName, lastName});
                    }}
                >
                    Create Account
                </button>
            </div>
        </div>
    )
}
