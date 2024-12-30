import { FormEvent } from "react"
import AuthForm from "../../components/Auth/AuthForm"
import SandWatch from '../../assets/loginFeaturesIcons/sand-watch.svg'
import { useLocation, useNavigate } from "react-router-dom";
import { StartAgainButton } from "../../components/Buttons";
import dict from "./dictionary/dictionary";


// type Props = {}

export default function RegSessionExpired() {

    const { state } = useLocation();

    const navigate = useNavigate();
    function handleSubmit(e: FormEvent<HTMLFormElement>): void {
        navigate('/auth/register', { state, replace: true })
    }



    return (
        <>
            <div className='flex-center'>
                <img src={SandWatch} alt={dict.alt.expired} width={65} />
            </div>
            <AuthForm title={dict.titles.expired} onSubmitForm={handleSubmit}>
                <p className='auth-message'>
                    <span>{dict.spanText.expired[0]}</span>
                    <span>{dict.spanText.expired[1]}</span>
                </p>
                <StartAgainButton />
            </AuthForm>
        </>
    )
}