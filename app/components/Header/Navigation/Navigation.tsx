`use client`
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import classes from "./Navigation.module.scss";
import PropTypes from "prop-types";
import {useRouter} from "next/navigation";

export default function Navigation({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: (isOpen: boolean) => void}) {
    const router = useRouter();

    return (
        <>
            <div className={`${classes.navigationContainer} ${isOpen ? classes.open : classes.close}`}>
                <div className={classes.subNavigationContainer}>
                    <span>MENU</span>
                    <span>REWARDS</span>
                    <span>GIFT CARDS</span>
                </div>
                <div className={classes.devider}/>
                <div className={classes.callToActionContainer}>
                    <div className={classes.registrationContainer}>
                        <button onClick={()=> {
                            setIsOpen(false);
                            router.push("/account/sign-in");
                        }}>
                            Sign in
                        </button>
                        <button className={"dark"}
                                onClick={()=> {
                                    setIsOpen(false);
                                    router.push("/account/new")
                                }}>
                            Join now
                        </button>
                    </div>
                    <div className={classes.storeLocator}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <span>Find a store</span>
                    </div>
                </div>
            </div>
                {isOpen && <div className={classes.overlay}/>}
        </>
    )
}

Navigation.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired
}
