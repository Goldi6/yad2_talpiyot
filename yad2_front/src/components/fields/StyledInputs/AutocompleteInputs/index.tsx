import { useState } from "react";
import { useOnEmptyError } from "../../hooks/useOnEmptyError";
import BasicInput from "../ProfileStyledInputs/Input/BasicInput";
import { NamedInputState } from "../../Index";


export function CityInputPersonal({ state, inpRef }: NamedInputState) {

    const [err, setErr] = useState<string | null>(null);

    useOnEmptyError({ state, setErr, ERR_NAME: 'CITY_IS_REQUIRED' })

    return (
        <BasicInput inpRef={inpRef} addAsterisk={true} errMessage={err} name={'city'} inputState={state} hasPlaceholder={false} />
    )



}


export function StreetInputPersonal({ inpRef, state }: NamedInputState) {

    const [err, setErr] = useState<string | null>(null);

    useOnEmptyError({ state, setErr, ERR_NAME: 'STREET_IS_REQUIRED' })

    return (
        <BasicInput inpRef={inpRef} addAsterisk={true} errMessage={err} name={'street'} inputState={state} hasPlaceholder={false} />
    )



}


export function HouseNumberInputPersonal({ inpRef, state }: NamedInputState) {

    const [err, setErr] = useState<string | null>(null);

    useOnEmptyError({ state, setErr, ERR_NAME: 'HOUSE_NUMBER_IS_REQUIRED' })

    return (
        <BasicInput inpRef={inpRef} addAsterisk={true} errMessage={err} name={'houseNumber'} inputState={state} hasPlaceholder={false} />
    )



}