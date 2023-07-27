`use client`

import React from "react";
import classes from "./BurgerToggle.module.scss";
import PropTypes from "prop-types";
import {IBurgerToggleProps} from "@/app/components/Header/BuregerToggle/props";

export default function BurgerToggle({isOpen, setIsOpen}: IBurgerToggleProps) {
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

