`use client`
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import React, {useContext} from "react";
import classes from "./Navigation.module.scss";
import PropTypes from "prop-types";
import {useRouter} from "next/navigation";
import messages from "@/public/messages.json";
import {INavigationProps} from "@/app/components/Header/Navigation/props";
import {AlertContext} from "@/app/contexts/alert/AlertContext";



export default function Navigation({isOpen, setIsOpen, loggedUser, logout}: INavigationProps) {
    const { methodNotImplemented } = useContext(AlertContext);
    const router = useRouter();

    return (
        <>
            <div className={`${classes.navigationContainer} ${isOpen ? classes.open : classes.close}`}>
                <div className={classes.subNavigationContainer}
                     onClick={()=> methodNotImplemented()}>
                    <span >{messages.menu}</span>
                    <span>{messages.rewards}</span>
                    <span>{messages.giftCards}</span>
                </div>
                <div className={classes.devider}/>
                <div className={classes.callToActionContainer}>
                    <div className={classes.registrationContainer}>
                        {loggedUser?.token !== undefined ?
                            <button onClick={()=>{
                                logout(loggedUser.token);
                            }}>
                                {messages.logout}
                            </button> :
                            <>
                                <button onClick={()=> {
                                    setIsOpen(false);
                                    router.push("/account/sign-in");
                                }}>
                                    {messages.signIn}
                                </button>
                                <button className={"dark"}
                                        onClick={()=> {
                                            setIsOpen(false);
                                            router.push("/account/new")
                                        }}>
                                    {messages.joinNow}
                                </button>
                            </>
                        }

                    </div>
                    <div className={classes.storeLocator}
                         onClick={()=> methodNotImplemented()}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <span>{messages.findStore}</span>
                    </div>
                </div>
            </div>
            {isOpen && <div className={classes.overlayContainer} ><div className={classes.overlay}/> </div>}
        </>
    )
}

Navigation.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired
}
