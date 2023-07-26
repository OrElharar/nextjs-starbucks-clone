import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons"; // Replace this with the appropriate icon you want

import "./Input.scss";
import {IValidationResponse} from "@/entities/interfaces/validationResponse";
import Star from "@/app/components/general/Star/Star";

interface InputProps {
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    validate?: (value: string) => IValidationResponse;
    isRequired?: boolean;

}

const Input: React.FC<InputProps> = ({ label, type, value, validate, onChange, isRequired }) => {
    const [errorMessages, setErrorMessages] = React.useState<string[]>([]);

    const onBlurInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!validate)
            return;
        const value = e.target.value;
        const validationResponse = validate(value);
        if (validationResponse.isValid) {
            setErrorMessages([]);
            return;
        }

        setErrorMessages([...validationResponse.messages]);
    }
    return (
        <div className={"input-container"}>
            <label>
                {isRequired && <Star/>}
                {label}
            </label>
            <input type={type}
                   value={value}
                   onBlur={onBlurInput}
                   onChange={onChange}
            />
            {errorMessages.length > 0 &&
                errorMessages.map((errorMessage, index) => (
                    <div key={`error_message_${index}`} className="error-message-container text-wrapper">
                        <FontAwesomeIcon icon={faTimes} size="lg" color="red" />
                        <span>{errorMessage}</span>
                    </div>
                ))
            }
        </div>
    );
};

export default Input;
