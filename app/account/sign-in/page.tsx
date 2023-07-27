'use client'

import SignInForm from "@/app/account/sign-in/components/SignInForm/SignInForm";
import SignInHeader from "@/app/account/sign-in/components/SignInHeader/SignInHeader";
import LoginTransition from "@/app/account/sign-in/components/LoginTransition/LoginTransition";
import React, {useEffect} from "react";
import {LoginContext} from "@/app/contexts/login/LoginContext";
import {useRouter} from "next/navigation";

export default function SignInPage() {
    const { loggedUser, login } = React.useContext(LoginContext);
    const router = useRouter();

    useEffect(()=>{
        if(loggedUser?.token !== undefined){
            router.push("/");
        }
    }, [loggedUser?.token])

    return (
        <div>
            <SignInHeader/>
            <SignInForm login={login}/>
            <LoginTransition/>
        </div>
    )
}
