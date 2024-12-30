import AuthForm from "../../components/Auth/AuthForm"
import FormSeparator from "../../components/Auth/FormSeparator";
import AuthWithSocialMedia from "../../components/AuthWithSocialMedia/AuthWithSocialMedia";
import useAuthPost from "../../hooks/useAuthPost";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import dict from "./dictionary/dictionary";
import { LoginLink } from "../../components/links";
import usePasswordsValidate from "../../components/fields/hooks/validations/usePasswordsValidate";
import useEmailValidate from "../../components/fields/hooks/validations/useEmailValidate";
import { EyeDoublePasswordInput, XEmailInput } from "../../components/fields/Index";
import { ContinueButton } from "../../components/Buttons";


export default function Register() {

    const { state } = useLocation();

    const { setEmail, email, emailErr, validateEmail } = useEmailValidate(state?.email || '');
    const {
        password,
        setPassword,
        doublePasswordErr: passwordErr,
        validatePasswords,
        password2,
        setPassword2,
    } = usePasswordsValidate();


    //post6
    const { post, ErrComponent, errorMessage, setErrorMessage } = useAuthPost({
        navigateOnSuccessUrl: "/auth/register/email-validation-code",
        data: { email, password },
        authType: "sendCode",
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validateResults = [validateEmail(), validatePasswords()];

        if (validateResults.some((valid) => !valid)) return;
        post();
        setPassword(() => '');
        setPassword2(() => '');

    }


    useEffect(() => {
        setErrorMessage(() => null);
    }, [email, password, password2, setErrorMessage])


    return (
        <AuthForm title={dict.titles.niceToMeet} onSubmitForm={handleSubmit}>
            <ul>
                <XEmailInput state={[email, setEmail]} err={emailErr} />
                <EyeDoublePasswordInput state1={[password, setPassword]} state2={[password2, setPassword2]} err1={passwordErr} err2={passwordErr} />


                {errorMessage && <ErrComponent />}


            </ul>
            <ContinueButton />
            <FormSeparator />
            <AuthWithSocialMedia />
            <LoginLink />
        </AuthForm>
    )
}