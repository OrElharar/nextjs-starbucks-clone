import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import classes from "./Footer.module.scss";

const Footer: React.FC = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.footerTitle}>Starbucks Clone Project</div>
            <div className={classes.socialIcons}>
                <a href="#" className={classes.socialIcon}>
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" className={classes.socialIcon}>
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className={classes.socialIcon}>
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
