import AuthForm from "../../components/Auth/AuthForm";
import AuthImageBox from "../../components/Auth/AuthImageBox";
import { SendMeCodeButton } from "../../components/Buttons";
import { RegisterLink } from "../../components/links";
import { XEmailInput } from "../../components/fields/Index";
import useEmailValidate from "../../components/fields/hooks/validations/useEmailValidate";
import dict from "./dictionary/dictionary";



export default function ResetPassword() {

    const { setEmail, email, emailErr, validateEmail } = useEmailValidate();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateEmail()) return;

        throw new Error('not implemented yet');
        //TODO: reset password
        //post();
    }


    return (
        <>

            <AuthImageBox />
            <AuthForm title={dict.titles.resetPassword} onSubmitForm={handleSubmit}>
                <p className='auth-message'>{dict.spanText.resetPassword}</p>
                <ul>
                    <XEmailInput state={[email, setEmail]} err={emailErr} />

                    {/* {errorMessage && <ErrComponent />} */}
                </ul>
                <SendMeCodeButton />
                <RegisterLink />
            </AuthForm>

        </>
    )
}