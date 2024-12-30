import { useEffect, useId, useState } from "react";
import { IconClose } from "../Icons";
import StyledInput from "../field.styled";
import { getFullInpData } from "../../inpDataTextSettings";

type Props = {
    state: [string, React.Dispatch<React.SetStateAction<string>>];
    errMessage: string | null;
    name: 'code';

}


export default function NumberXInput({ state, errMessage, name = 'code' }: Props) {

    const [value, setValue] = state;
    const [disableButton, setDisableButton] = useState<boolean>(false);
    const id = useId();
    const [buttonClass, setButtonClass] = useState<'hide' | ''>('hide');
    const { placeholder, type, label } = getFullInpData(name);

    const inpDataText = { placeholder, type, name };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue = event.target.value;

        inputValue = inputValue.replace(/[^0-9]/g, '');


        setValue(inputValue);
        setButtonClass(inputValue.length > 0 ? '' : 'hide');

    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setValue('');

    };

    const handleFocus = () => {
        if (value.length > 0) {
            setButtonClass('');
            setDisableButton(false);
        }
    }

    useEffect(() => {
        if (errMessage) {
            setDisableButton(true);
        }
    }, [errMessage]);


    return (
        <StyledInput>
            <div className="input-container">
                <input

                    {...inpDataText}
                    onChange={handleChange}
                    id={id}
                    value={value}
                    autoComplete="off"
                    onBlur={() => setButtonClass('hide')}
                    onFocus={handleFocus}
                    className={errMessage ? 'error' : ''}
                />
                <button disabled={disableButton} aria-label="נקה שדה" onClick={handleClick} className={buttonClass}>
                    <IconClose />
                </button>
            </div>
            {errMessage && <p className="input-error">{errMessage}</p>}
        </StyledInput>
    );
};
