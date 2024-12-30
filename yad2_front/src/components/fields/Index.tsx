import { useState } from "react";
import EyeInput from "./StyledInputs/EyeInput/EyeInput";
import Input from "./StyledInputs/Input/Input";
import XInput from "./StyledInputs/XInput/XInput";
import NumberXInput from "./StyledInputs/NumberXInput/NumberXInput";
import { useOnEmptyError } from "./hooks/useOnEmptyError";
import BasicInput from "./StyledInputs/ProfileStyledInputs/Input/BasicInput";


// ─── Define Your App Inputs Here ─────────────────────────────────────────────────




//NOTE: inputs that start with X are inputs that have a clear button
//NOTE: inputs that start with Eye are inputs that have a show/hide password button

type Props = {
    err: string | null;
    state: [string, React.Dispatch<React.SetStateAction<string>>]
}

export function XNameInput({ state, err }: Props) {

    return (
        <XInput errMessage={err} name={'name'} inputState={state} />
    )
};

export function XSurnameInput({ state, err }: Props) {

    return (
        <XInput errMessage={err} name={'surname'} inputState={state} />
    )
};


export function XEmailInput({ state, err }: Props) {

    return (
        <XInput errMessage={err} name={'email'} inputState={state} />
    )
}


export function PhoneInput({ state, err }: Props) {

    return (
        <Input errMessage={err} name={'phone'} inputState={state} />
    )
}


export function EyePasswordInput({ state, err }: Props) {

    const [visible, setVisible] = useState(false);

    return (
        <EyeInput err={err} visibleState={[visible, setVisible]} valueState={state} />)
}

type Props2 = {
    state1: [string, React.Dispatch<React.SetStateAction<string>>];
    state2: [string, React.Dispatch<React.SetStateAction<string>>];
    err1: string | null;
    err2: string | null;

}

export function EyeDoublePasswordInput({ state1, state2, err1, err2 }: Props2) {

    const [visible, setVisible] = useState(false);

    return (
        <>
            <EyeInput err={err1} visibleState={[visible, setVisible]} valueState={state1} hideError={true} />
            <EyeInput err={err2} visibleState={[visible, setVisible]} valueState={state2} name='confirmPassword' />
        </>
    )
}



export function XCodeInput({ state, err }: Props) {


    return (
        <NumberXInput name={'code'} state={state} errMessage={err} />
    )
}


// Profile update props

export type NamedInputState = {
    state: [string, React.Dispatch<React.SetStateAction<string>>],
    inpRef?: React.MutableRefObject<any>
}


export function NameInputPersonal({ state }: NamedInputState) {

    const [err, setErr] = useState<string | null>(null);
    useOnEmptyError({ state, setErr, ERR_NAME: 'NAME_IS_REQUIRED' })

    return (
        <BasicInput errMessage={err} name={'name'} inputState={state} hasPlaceholder={false} addAsterisk={true} />
    )
}
export function SurnameInputPersonal({ state }: NamedInputState) {
    const [err, setErr] = useState<string | null>(null);

    useOnEmptyError({ state, setErr, ERR_NAME: 'SURNAME_IS_REQUIRED' })

    return (
        <BasicInput addAsterisk={true} errMessage={err} name={'surname'} inputState={state} hasPlaceholder={false} />
    )
}
export function PhoneInputPersonal({ state }: NamedInputState) {
    const [err, setErr] = useState<string | null>(null);

    useOnEmptyError({ state, setErr, ERR_NAME: 'PHONE_IS_REQUIRED' })

    return (
        <BasicInput addAsterisk={true} errMessage={err} name={'phone'} inputState={state} hasPlaceholder={false} />
    )
}
export function BirthdayInputPersonal({ state }: NamedInputState) {
    const [err, setErr] = useState<string | null>(null);

    useOnEmptyError({ state, setErr, ERR_NAME: 'BIRTHDAY_IS_REQUIRED' })

    return (
        <BasicInput addAsterisk={true} errMessage={err} name={'birthday'} inputState={state} hasPlaceholder={false} />
    )
}

