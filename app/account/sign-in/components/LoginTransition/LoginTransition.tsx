'use client';

import {useRouter} from "next/navigation";
import classes from "./LoginTransition.module.scss";
import messages from "@/public/messages.json";

export default function LoginTransition() {
    const router = useRouter();

    return (
        <div className={classes.loginTransitionContainer}>
            <h3>{messages.joinStarbucksRewards.title}</h3>
            <p>{messages.joinStarbucksRewards.description}</p>
            <button onClick={()=> router.push("/account/new")}>
                {messages.joinNow}
            </button>
        </div>
    )
}
