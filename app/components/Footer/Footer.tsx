'use client';

import React, {useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import classes from "./Footer.module.scss";
import messages from "@/public/messages.json";
import {AlertContext} from "@/app/contexts/alert/AlertContext";

const Footer: React.FC = () => {
    const { methodNotImplemented } = useContext(AlertContext);
    return (
        <footer className={classes.footer}>
            <div className={classes.footerTitle}>{messages.footerTitle}</div>
            <div className={classes.socialIcons} onClick={()=> methodNotImplemented()}>
                <a className={classes.socialIcon}>
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a className={classes.socialIcon}>
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a className={classes.socialIcon}>
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
