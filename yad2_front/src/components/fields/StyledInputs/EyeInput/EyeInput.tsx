import { useEffect, useId, useState } from "react";
import StyledInput from "../field.styled";
import { IconEye, IconEyeOff } from "../Icons";
import { getFullInpData } from "../../inpDataTextSettings";



type Props = {
    valueState: [string, React.Dispatch<React.SetStateAction<string>>];
    err: string | null;
    hideError?: true;
    visibleState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
    name?: 'password' | 'confirmPassword';

}

export default function EyeInput({ valueState, err, hideError, visibleState, name = 'password' }: Props) {

    const [value, setValue] = valueState;
    const [isVisible, setIsVisible] = visibleState;

    const id = useId();



    const { placeholder, type, label } = getFullInpData(name);



    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

        setValue(e.target.value);



    }









    return (
        <StyledInput>
            <label htmlFor={id}>
                {label}
            </label>
            <div className="input-container">
                {isVisible && <input
                    placeholder={placeholder}
                    type={type}
                    name={name}
                    id={id}
                    value={value}
                    onChange={onChangeHandler}
                    className={err ? 'error' : ''}
                />}
                {!isVisible && <input
                    className={err ? 'error' : ''}
                    placeholder={placeholder}
                    type='password'
                    name={name}
                    id={id}
                    value={value}
                    onChange={onChangeHandler}

                />}
                <button onClick={() => setIsVisible(!isVisible)} type='button' >
                    {isVisible ? <IconEyeOff /> : <IconEye />}
                </button>
            </div>
            {!hideError && err && <p className="input-error">{err}</p>}

        </StyledInput >)
}