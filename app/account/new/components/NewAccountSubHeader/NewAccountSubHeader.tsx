import classes from "./NewAccountSubHeader.module.scss";
import messages from "@/public/messages.json";

export default function NewAccountSubHeader() {
  return (
      <div className={classes.newAccountSubHeaderContainer}>
          <h1>{messages.createAccount}</h1>
          <h3>{messages.starbucksLtd} {messages.rewards}</h3>
          <p>{messages.joinStarbuckBenefits}</p>
      </div>
  )
}
