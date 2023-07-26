import SignInForm from "@/app/account/sign-in/components/SignInForm/SignInForm";
import SignInHeader from "@/app/account/sign-in/components/SignInHeader/SignInHeader";
import LoginTransition from "@/app/account/sign-in/components/LoginTransition/LoginTransition";

export default function SignInPage() {
    return (
        <div>
            <SignInHeader/>
            <SignInForm/>
            <LoginTransition/>
        </div>
    )
}
