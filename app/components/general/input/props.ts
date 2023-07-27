import React from "react";
import {IValidationResponse} from "@/entities/interfaces/validationResponse";

export interface InputProps {
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    validate?: (value: string) => IValidationResponse;
    isRequired?: boolean;

}
