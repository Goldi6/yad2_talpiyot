import React from "react";
import styled from "styled-components"

type Props = {
    InnerNode: React.ReactNode | string;
    classN?: string
}


const StyledButton = styled.button`
margin-top: 30px;
text-align: center;
border-radius: 30px;
height: ${props => props.theme.authButtonHeight};
width: 100%;
`;


export function SubmitButton({ InnerNode }: Props) {

    return (
        <StyledButton className='btn-orange' type='submit'>{InnerNode}</StyledButton>
    )
}


export function ResetButton({ InnerNode, classN }: Props) {

    return (
        <StyledButton className={classN} type='reset'>{InnerNode}</StyledButton>
    )
}

export function ActionButton({ InnerNode, classN }: Props) {

    return (
        <StyledButton className={classN} type='button'>{InnerNode}</StyledButton>
    )
}
