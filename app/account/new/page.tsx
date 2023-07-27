'use client'
import NewAccountForm from "@/app/account/new/components/NewAccountForm/NewAccountForm";
import NewAccountSubHeader from "@/app/account/new/components/NewAccountSubHeader/NewAccountSubHeader";
import React, {useEffect} from "react";
import {LoginContext} from "@/app/contexts/login/LoginContext";
import {useRouter} from "next/navigation";

export default function NewAccountPage() {
    const { loggedUser, signIn } = React.useContext(LoginContext);
    const router = useRouter();

    useEffect(()=>{
        if(loggedUser?.token !== undefined){
            router.push("/");
        }
    }, [loggedUser?.token])

    return (
        <>
            <NewAccountSubHeader/>
            <NewAccountForm signIn={signIn} />
        </>
    )
}
