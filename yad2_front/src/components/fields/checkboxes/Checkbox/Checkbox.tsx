import styled from "styled-components";
import style from './style.module.scss';
import { StyledInputError } from "../../StyledInputs/field.styled";

type Params = {
    name: string;
    children: React.ReactNode;
    errMsg: string | null;
    checked: boolean;
    setChecked: React.Dispatch<React.SetStateAction<boolean>>;
    errMsg2?: string | null | undefined;
}

const StyledCheckbox = styled.label`
    font-size: 16px;
    color:#363636;
    color:inherit;
    margin-top: 20px;

        .link-container{
            margin-top: unset;
            
        }



    `;




export default function Checkbox({ name, children, checked, setChecked, errMsg }: Params) {
    return (
        <li>
            <StyledCheckbox className={style.checkBox} >
                <input

                    onChange={() => setChecked(!checked)}
                    className="checkbox" type="checkbox" aria-label="checkbox" name={name} checked={checked} />
                &nbsp;
                <span className="text">
                    {children}

                </span>
            </StyledCheckbox>
            {errMsg && <StyledInputError className="error">{errMsg}</StyledInputError>}

        </li>
    )
}
