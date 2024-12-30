import { useLocation, useNavigate } from "react-router-dom";
import AuthImageBox from "../../components/Auth/AuthImageBox";
import AuthForm from "../../components/Auth/AuthForm";
import { useEffect } from "react";
import { SmallLoginLink } from "../../components/links";


export default function RegisterSuccess() {
    const navigate = useNavigate();
    const { state } = useLocation();


    if (!state.success) navigate('/auth/login', { replace: true });

    useEffect(() => {


        window.history.replaceState({}, "", "/auth/login");
    }, []);







    return (
        <>
            <AuthImageBox />
            <AuthForm title={"אימות מייל"} onSubmitForm={() => { }}>
                <p className='auth-message'>
                    <span>האימות עבר בהצלחה!</span>
                    <span>עבור לעמוד ההתחברות כדי להכנס למערכת</span>
                </p>
                <span onClick={(e) => {
                    e.preventDefault();
                    navigate('/auth/login', { state: { email: state.email }, replace: true });
                }}>
                    <SmallLoginLink />
                </span>


            </AuthForm>
        </>
    )
}
