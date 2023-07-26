import React from "react";
import Star from "@/app/components/general/Star/Star";
import messages from "@/public/messages.json";


export default function StarExplanation() {
    return <h3> <Star/> {messages.requiredFieldIndication}</h3>
}
