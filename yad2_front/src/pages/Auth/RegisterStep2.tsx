import { useBeforeUnload, useLocation, useNavigate } from "react-router-dom";
import AuthForm from "../../components/Auth/AuthForm";
import useAuthPost from "../../hooks/useAuthPost";
import { useEffect } from "react";
import dict from "./dictionary/dictionary";
import { RegisterButton } from "../../components/Buttons";
import useInactivityNavigate from "../../hooks/useInactivityNavigate";
import useNameValidate from "../../components/fields/hooks/validations/useNameValidate";
import usePhoneValidate from "../../components/fields/hooks/validations/usePhoneValidate";
import { XNameInput, PhoneInput, XSurnameInput } from "../../components/fields/Index";
import { TermsCheckBox, UpdatesCheckBox } from "../../components/fields/checkboxes";
import useCheckbox from "../../components/fields/hooks/validations/useCheckBox";


export default function RegisterStep2() {
    const { state } = useLocation();
    const navigate = useNavigate();

    const email = state?.email;


    if (!email) {
        navigate("/auth/register");
    }

    const { name, setName, nameErr, validateName } = useNameValidate();
    const { name: surname, setName: setSurname, nameErr: surnameErr, validateName: validateSurname } = useNameValidate();
    const { phone, setPhone, phoneErr, validatePhone } = usePhoneValidate();
    const { checked: termsChecked, setChecked: setCheckedTerms, err: termsErr, validate: validateTerms } = useCheckbox(false);
    const { checked: updateChecked, setChecked: setCheckedUpdate } = useCheckbox(false);

    useBeforeUnload((e) => {

        window.history.replaceState({}, document.title)
    });

    useInactivityNavigate({ dataState: { email } });

    const { post, errorMessage, ErrComponent, setErrorMessage } = useAuthPost({
        navigateOnSuccessUrl: "/auth/register/success",
        data: { email: state.email, name, surname, phone },
        authType: "register",
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validateResults = [validateName(), validateSurname(), validatePhone(), validateTerms()];

        if (validateResults.some((valid) => !valid)) return;
        post();


    }

    useEffect(() => {
        setErrorMessage(() => null);
    }, [name, surname, phoneErr, setErrorMessage])


    return (
        <AuthForm title={dict.titles.niceToMeet} onSubmitForm={handleSubmit}>
            <ul >
                <XNameInput state={[name, setName]} err={nameErr} />
                <XSurnameInput state={[surname, setSurname]} err={surnameErr} />
                <PhoneInput err={phoneErr} state={[phone, setPhone]} />
                {errorMessage && <ErrComponent />}
                <TermsCheckBox checked={termsChecked} setChecked={setCheckedTerms} errMsg={termsErr} />
                <UpdatesCheckBox checked={updateChecked} setChecked={setCheckedUpdate} />

            </ul>
            <RegisterButton />
        </AuthForm>
    )
}



