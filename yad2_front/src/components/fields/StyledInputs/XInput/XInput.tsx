import { useId, useState } from "react";
import StyledInput from "../field.styled";
import { IconClose } from "../Icons";
import { getFullInpData } from "../../inpDataTextSettings";

//NOTE complete verse
type Props = {


    errMessage: string | null;
    name: 'name' | 'surname' | 'email';
    inputState: [string, React.Dispatch<React.SetStateAction<string>>]
}

export default function XInput({ errMessage, name, inputState }: Props) {


    const [value, setValue] = inputState;
    const { placeholder, type, label } = getFullInpData(name);

    const inpDataText = { placeholder, type, name };

    const id = useId();
    const [buttonClass, setButtonClass] = useState<'hide' | ''>('hide');




    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setValue(inputValue);
        setButtonClass(inputValue.length > 0 ? '' : 'hide');
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setValue('');

    };





    return (
        <StyledInput>
            <label htmlFor={id}>
                {label}
            </label>
            <div className="input-container">
                <input
                    {...inpDataText}
                    onChange={handleChange}
                    id={id}
                    value={value}
                    onBlur={() => setButtonClass('hide')}
                    onFocus={() => value.length > 0 && setButtonClass('')}
                    className={errMessage ? 'error' : ''}
                />
                <button aria-label="נקה שדה" onClick={handleClick} className={buttonClass}>
                    <IconClose />
                </button>
            </div>
            {errMessage && <p className="input-error">{errMessage}</p>}
        </StyledInput>
    )
}




