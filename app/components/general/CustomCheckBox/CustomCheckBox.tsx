import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faSquare } from "@fortawesome/free-regular-svg-icons";

import classes from "./CustomCheckBox.module.scss"

const CustomCheckBox = ({ isMarked, setValue, description }: {isMarked: boolean, setValue: (isMarked: boolean) => void, description: string}) => {

    return (
        <div className={classes.checkboxContainer}>

            <div className={classes.checkboxWrapper}onClick={()=>setValue(!isMarked)}>
                {!isMarked ?
                    <FontAwesomeIcon icon={faSquare} size="lg" color="green" />
                    :
                    <span className={classes.checkboxChecked}>
                        <FontAwesomeIcon icon={faCheckSquare} size="lg" color="green" />
                    </span>}
            </div>
            <span>{description}</span>
        </div>
    );
};

export default CustomCheckBox;
