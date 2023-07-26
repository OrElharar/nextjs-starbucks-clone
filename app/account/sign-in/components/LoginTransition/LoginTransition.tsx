'use client';

import {useRouter} from "next/navigation";
import classes from "./LoginTransition.module.scss";

export default function LoginTransition() {
    const router = useRouter();

    return (
        <div className={classes.loginTransitionContainer}>
            <h3>JOIN STARBUCKS® REWARDS</h3>
            <p>Join Starbucks® Rewards to earn free food and drinks, get free refills, pay and order with your phone, and more.</p>
            <button onClick={()=> router.push("/account/new")}>
                Join now
            </button>
        </div>
    )
}
