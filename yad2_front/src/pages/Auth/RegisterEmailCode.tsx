import { FormEvent, useEffect } from "react"
import AuthForm from "../../components/Auth/AuthForm"
import AuthImageBox from "../../components/Auth/AuthImageBox"
import styled from "styled-components"
import useCountDown from "../../hooks/useCountDown"
import useInactivityNavigate from "../../hooks/useInactivityNavigate"
import { useLocation, useNavigate } from "react-router-dom"
import useAuthPost from "../../hooks/useAuthPost"
import CounterComponent from "../../components/Auth/Counter"
import ResendCode from "../../components/Auth/ResendCode"

import dict from "./dictionary/dictionary";
import { ContinueButton } from "../../components/Buttons"
import useCodeValidate from "../../components/fields/hooks/validations/useCodeValidate"
import { XCodeInput } from "../../components/fields/Index"



const StyledSendAgainBlock = styled.div`
margin: 0;
margin-top: 30px;
display: block;


.time-counter{
    font-weight: 500;
    font-size: 14px;
}

.small-comment{
    color: ${props => props.theme.lightGrayCommentColor};
    font-size: 12px;
    margin: auto;
    text-align: center;
    display: block;
    line-height: 2;
}


`;



export default function RegisterCode() {

    const navigate = useNavigate();
    const { state } = useLocation();
    //ERROR: remove verification code when email service is implemented
    let verificationCode = state?.code || null;

    useEffect(() => {
        if (!state.email) navigate('/auth/login');

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.email])



    const { code, setCode, codeErr, validateCode, setCodeErr } = useCodeValidate(verificationCode);

    const { post, errorMessage } = useAuthPost({
        navigateOnSuccessUrl: "/auth/register/step2",
        data: { email: state.email, code },
        authType: "verifyCode",
    })


    const seconds = useCountDown(60);
    //navigates to 'session expired' page if user is inactive for 5 minutes
    useInactivityNavigate({ dataState: state });


    async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {



        e.preventDefault();
        if (!validateCode()) return;

        await post();


    }


    useEffect(() => {
        if (errorMessage) setCodeErr(() => errorMessage);
    }, [errorMessage, setCodeErr])






    return (
        <>
            <AuthImageBox />
            <AuthForm title={dict.titles.verifyEmail} onSubmitForm={handleSubmit}>
                <p className='auth-message'>
                    <span>{dict.spanText.verifyEmail[0]}</span>
                    <span>{dict.spanText.verifyEmail[1]}</span>
                </p>
                <ul>
                    <XCodeInput err={codeErr} state={[code, setCode]} />
                    <StyledSendAgainBlock>
                        {seconds === 0 ? <ResendCode /> : <CounterComponent seconds={seconds} />}
                    </StyledSendAgainBlock>
                </ul>
                <ContinueButton />
            </AuthForm>
        </>
    )
}