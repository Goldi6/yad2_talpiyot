import { useLocation } from "react-router-dom";
import NavigateLink from "./NavigateLink";
import useAuthPost from "../../hooks/useAuthPost";

export default function ResendCode() {
    const { state } = useLocation();
    const email = state?.email || null;
    const { post, errorMessage, ErrComponent } = useAuthPost({
        navigateOnSuccessUrl: "/auth/register/email-validation-code",
        data: { email },
        authType: "resendCode",
    })
    return (<>
        {errorMessage && <ErrComponent />}
        <span onClick={(e) => { e.preventDefault(); post(); }}>
            <NavigateLink classN='small' text={"לא קיבלתי את המייל."} linkText={"שלחו לי שוב"} url={"/auth/register"} />
        </span>
        <span className='small-comment'>כדאי לבדוק בתיבת הספאם</span>
    </>)
}