import { useId } from "react";
import StyledInput from "../field.styled";
import { InputTypes, TypeStandardInputNames, getFullInpData } from "../../inpDataTextSettings";


type Props = {
    hasPlaceholder?: boolean;
    errMessage: string | null;
    name: TypeStandardInputNames;
    inputState: [string, React.Dispatch<React.SetStateAction<string>>]
}

export default function Input({ errMessage, name, inputState, hasPlaceholder = true, }: Props) {


    const [value, setValue] = inputState;


    const id = useId();
    const { placeholder, type, label } = getFullInpData(name);

    let inpDataText: { type: InputTypes; name: TypeStandardInputNames; placeholder?: string } = { type, name, placeholder };

    if (!hasPlaceholder) delete inpDataText.placeholder;;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setValue(inputValue);
    };


    return (
        <StyledInput >
            <label htmlFor={id}>
                {label}
            </label>
            <div className="input-container">
                <input
                    {...inpDataText}
                    onChange={handleChange}
                    id={id}
                    value={value}
                    className={errMessage ? 'error' : ''}
                />

            </div>
            {errMessage && <p className="input-error">{errMessage}</p>}
        </StyledInput>
    )
}