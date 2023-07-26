import classes from "./SignInHeader.module.scss";
import messages from "@/public/messages.json";

export default function SignInHeader() {
    return (
        <h1 className={classes.header}>{messages.signInPageTitle}</h1>)
}
