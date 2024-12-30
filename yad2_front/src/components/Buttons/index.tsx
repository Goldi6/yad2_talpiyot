import { ResetButton, SubmitButton } from "./ButtonTypes"
import dict from "../../pages/Auth/dictionary/dictionary";



const { btns } = dict;

const LoginButton = () => {
    return <SubmitButton InnerNode={btns.login} />

}
const ContinueButton = () => {
    return <SubmitButton InnerNode={btns.continue} />

}

const SendMeCodeButton = () => {
    return <SubmitButton InnerNode={btns.sendMeCode} />

}

const RegisterButton = () => {
    return <SubmitButton InnerNode={btns.doneRegister} />

};
const StartAgainButton = () => {
    return <SubmitButton InnerNode={btns.startAgain} />
};

const SaveButton = () => {
    return <SubmitButton InnerNode={btns.save} />
};

const CancelButton = () => {
    return <ResetButton InnerNode={btns.cancel} />

}


export { CancelButton, LoginButton as ConnectButton, ContinueButton, SendMeCodeButton, RegisterButton, StartAgainButton, SaveButton }