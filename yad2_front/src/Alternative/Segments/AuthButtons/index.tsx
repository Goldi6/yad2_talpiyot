import { ResetButton, SubmitButton } from "./ButtonTypes"
import { authDictionary } from "../../lang/dictionary/dictionary";



const { btns } = authDictionary;

const LoginButton = () => {
    return <SubmitButton text={btns.login} />

}
const ContinueButton = () => {
    return <SubmitButton text={btns.continue} />

}

const SendMeCodeButton = () => {
    return <SubmitButton text={btns.sendMeCode} />

}

const RegisterButton = () => {
    return <SubmitButton text={btns.doneRegister} />

};
const StartAgainButton = () => {
    return <SubmitButton text={btns.startAgain} />
};

const SaveButton = () => {
    return <SubmitButton text={btns.save} />
};

const CancelButton = () => {
    return <ResetButton text={btns.cancel} />

}


export { CancelButton, LoginButton as ConnectButton, ContinueButton, SendMeCodeButton, RegisterButton, StartAgainButton, SaveButton }