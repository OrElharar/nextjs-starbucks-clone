'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import classes from "./Header.module.scss";
import React from "react";
import Navigation from "@/app/components/Header/Navigation/Navigation";
import BurgerToggle from "@/app/components/Header/BuregerToggle/BurgerToggle";
import {useRouter} from "next/navigation";

export default function Header() {
    const [isNavigationOpen, setIsNavigationOpen] = React.useState<boolean>(false);
    const router = useRouter();
    return (
        <header className={classes.headerContainer}>
            <span className={classes.imgContainer}>
                <img
                    src={"https://upload.wikimedia.org/wikipedia/he/e/ed/Starbucks_Corporation_Logo.png"}
                    alt={"Starbucks logo"}
                    onClick={() => {
                        setIsNavigationOpen(false);
                        router.push("/")
                    }}
                />
            </span>
            <Navigation
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
