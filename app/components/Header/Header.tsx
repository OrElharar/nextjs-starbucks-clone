'use client'

import classes from "./Header.module.scss";
import React, {useEffect} from "react";
import Navigation from "@/app/components/Header/Navigation/Navigation";
import BurgerToggle from "@/app/components/Header/BuregerToggle/BurgerToggle";
import {useRouter} from "next/navigation";

export default function Header() {
    const [isNavigationOpen, setIsNavigationOpen] = React.useState<boolean>(false);

    useEffect(()=>{
        if(isNavigationOpen){
            document.body.style.overflow = "hidden";
        }else {
            document.body.style.overflow = "unset";
        }
    },[isNavigationOpen])

    const router = useRouter();
    return (
        <header className={classes.headerContainer}>
            <span className={classes.imgContainer}>
                <img
                    src={"https://starbucks-clone.s3.eu-west-1.amazonaws.com/Starbucks_Corporation_Logo.png"}
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
