'use client'

import classes from "./Header.module.scss";
import React, {useContext} from "react";
import Navigation from "@/app/components/Header/Navigation/Navigation";
import BurgerToggle from "@/app/components/Header/BuregerToggle/BurgerToggle";
import {useRouter} from "next/navigation";
import {LoginContext} from "@/app/contexts/login/LoginContext";
import messages from "@/public/messages.json";
import {useDisableScroll} from "@/app/hooks/diableScroll";

export default function Header() {
    const [isNavigationOpen, setIsNavigationOpen] = React.useState<boolean>(false);
    const {loggedUser, logout} = useContext(LoginContext);
    useDisableScroll(isNavigationOpen);

    const router = useRouter();
    return (
        <header className={classes.headerContainer}>
            <span className={classes.imgContainer}>
                <img
                    src={"https://starbucks-clone.s3.eu-west-1.amazonaws.com/Starbucks_Corporation_Logo.png"}
                    alt={messages.starbucksLtd}
                    onClick={() => {
                        setIsNavigationOpen(false);
                        router.push("/")
                    }}
                />
            </span>
            <Navigation
                loggedUser={loggedUser}
                logout={logout}
                isOpen={isNavigationOpen}
                setIsOpen={setIsNavigationOpen}
            />
            <BurgerToggle
                isOpen={isNavigationOpen}
                setIsOpen={setIsNavigationOpen}
            />
        </header>
    );
}
