import { useId } from "react";
import { StyledInputProfile } from "../../field.styled";
import { InputTypes, TypeStandardInputNames, getFullInpData } from "../../../inpDataTextSettings";


type Props = {
    hasPlaceholder?: boolean;
    addAsterisk?: boolean;
    errMessage: string | null;
    name: TypeStandardInputNames;
    inputState: [string, React.Dispatch<React.SetStateAction<string>>];
    inpRef?: React.MutableRefObject<any>;
}

export default function BasicInput({ inpRef, errMessage, name, inputState, hasPlaceholder = true, addAsterisk = false }: Props) {


    const [value, setValue] = inputState;


    const id = useId();
    let { placeholder, type, label, autoComplete } = getFullInpData(name);

    let inpDataText: { type: InputTypes; name: TypeStandardInputNames; placeholder?: string, autoComplete: string } = { type, name, placeholder, autoComplete };
    label = addAsterisk ? label + '*' : label;

    if (!hasPlaceholder) delete inpDataText.placeholder;


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        if (name === 'phone' && inputValue.length > 10) return;
        setValue(inputValue);
    };

    const pattern = "05[0-9]{1}-[0-9]{7}";


    return (
        <StyledInputProfile >
            <label htmlFor={id}>
                {label}
            </label>
            {/* <div className="input-container"> */}
            <input
                ref={inpRef}
                {...(name === 'phone' && { pattern })}
                {...inpDataText}
                onChange={handleChange}
                id={id}
                value={value}
                className={errMessage ? 'error' : ''}
            />

            {/* </div> */}
            {errMessage && <p className="input-error">{errMessage}</p>}
        </StyledInputProfile>
    )
}