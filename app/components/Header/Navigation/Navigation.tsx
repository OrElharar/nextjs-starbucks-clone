`use client`
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import classes from "./Navigation.module.scss";
import PropTypes from "prop-types";
import {useRouter} from "next/navigation";
import {LoginContext} from "@/app/contexts/login/LoginContext";
import messages from "@/public/messages.json";

export default function Navigation({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: (isOpen: boolean) => void}) {
    const router = useRouter();
    const {loggedUser, logout} = React.useContext(LoginContext);

    return (
        <>
            <div className={`${classes.navigationContainer} ${isOpen ? classes.open : classes.close}`}>
                <div className={classes.subNavigationContainer}>
                    <span>{messages.menu}</span>
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
                    <div className={classes.storeLocator}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <span>{messages.findStore}</span>
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
