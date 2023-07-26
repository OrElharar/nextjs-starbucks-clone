`use client`

import React from "react";
import classes from "./BurgerToggle.module.scss";
import PropTypes from "prop-types";

export default function BurgerToggle({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: (isOpen: boolean) => void}) {
    return (
        <div className={classes.box} onClick={()=>setIsOpen(!isOpen)}>
            <div className={`${classes.btn} ${isOpen ? classes.active : classes.notActive}`}>
                <span className={classes.line}></span>
                <span className={classes.line}></span>
                <span className={classes.line}></span>
            </div>
        </div>
    )
}

BurgerToggle.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired
};
