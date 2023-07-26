'use client'

import React, { useContext } from "react";
import "./alert.scss";
import { faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { AlertContext } from "@/app/contexts/alert/AlertContext";
import {AlertStatus} from "@/app/contexts/alert/AlertStatus";




const Alert: React.FC = () => {
    const { alert, alertText } = useContext(AlertContext);

    if (alert !== AlertStatus.None) {
        return (
            alert === AlertStatus.Success ?
                <div className={`alert-container`}>
                    <div className={`alert-container__inner-box succeeded`}>
                        <span>  <FontAwesomeIcon icon={faCheckSquare} size="lg" color="green" /> </span>
                        <span>{alertText}</span>
                    </div>
                </div> :
                <div className={`alert-container`}>
                    <div className={`alert-container__inner-box failed`}>
                        <span><FontAwesomeIcon icon={faTimes} size="lg" color="red" /> </span>
                        <span>{alertText}</span>
                    </div>
                </div>
        );
    } else {
        return null;
    }
};

export default Alert;
