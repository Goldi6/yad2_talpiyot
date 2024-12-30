import styled from "styled-components"

type Props = {
    text: String
    classN?: string
}


const StyledButton = styled.button`
margin-top: 30px;
text-align: center;
border-radius: 30px;
height: ${props => props.theme.authButtonHeight};
width: 100%;
`;


export function SubmitButton({ text }: Props) {

    return (
        <StyledButton className='btn-orange' type='submit'>{text}</StyledButton>
    )
}


export function ResetButton({ text, classN }: Props) {

    return (
        <StyledButton className={classN} type='reset'>{text}</StyledButton>
    )
}

export function ActionButton({ text, classN }: Props) {

    return (
        <StyledButton className={classN} type='button'>{text}</StyledButton>
    )
}
