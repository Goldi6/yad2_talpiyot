import NavigateLink from "../Auth/NavigateLink";

import dict from "../../pages/Auth/dictionary/dictionary";


const LoginLink = () => {
    return <NavigateLink text={dict.links.toLogin.txt} linkText={dict.links.toLogin.link} url={"/auth/login"} />
};
const SmallLoginLink = () => {
    return <NavigateLink replace={true} classN='small' text={""} linkText={dict.links.toLogin.link} url={"/auth/login"} />

};

const RegisterLink = () => {
    return <NavigateLink text={dict.links.toRegister.txt} linkText={dict.links.toRegister.link} url={"/auth/register"} />

};
const TermsLink = () => {
    return <NavigateLink text={dict.checkBox.terms[0]} linkText={dict.links.toTerms.link} afterText={dict.checkBox.terms[1]} url={"/auth/register"} />

};


export { LoginLink, RegisterLink, SmallLoginLink, TermsLink }