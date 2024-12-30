import AuthForm from "../../components/Auth/AuthForm"
import FormSeparator from "../../components/Auth/FormSeparator";
import AuthWithSocialMedia from "../../components/AuthWithSocialMedia/AuthWithSocialMedia";
import useAuthPost from "../../hooks/useAuthPost";
import ForgotPassword from "../../components/Auth/ForgotPassword";
import { useEffect } from "react";
import dict from "./dictionary/dictionary";
import { RegisterLink } from "../../components/links";
import { ConnectButton } from "../../components/Buttons";
import useEmailValidate from "../../components/fields/hooks/validations/useEmailValidate";
import usePasswordValidate from "../../components/fields/hooks/validations/usePasswordValidate";
import { XEmailInput, EyePasswordInput } from "../../components/fields/Index";



export default function Login() {
    const { setEmail, email, emailErr, validateEmail } = useEmailValidate();
    const { password, setPassword, passwordErr, validatePassword } = usePasswordValidate();

    //===post
    const { post, errorMessage, setErrorMessage, ErrComponent } = useAuthPost({
        navigateOnSuccessUrl: "/",
        data: { email, password },
        authType: "login",
    })


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validateResults = [validateEmail(), validatePassword()];

        if (validateResults.some((valid) => !valid)) return;

        post();
        setPassword(() => '');
    }

    useEffect(() => {
        setErrorMessage(() => null);
    }, [email, password, setErrorMessage])




    return (
        <AuthForm title={dict.titles.goodToSeeYou} onSubmitForm={handleSubmit}>
            <ul>
                <XEmailInput state={[email, setEmail]} err={emailErr} />
                <EyePasswordInput state={[password, setPassword]} err={passwordErr} />
                {errorMessage && <ErrComponent />}

                <ForgotPassword />
            </ul>
            <ConnectButton />
            <FormSeparator />
            <AuthWithSocialMedia />
            <RegisterLink />
        </AuthForm>)
}