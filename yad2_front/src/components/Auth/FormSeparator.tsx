import styled from "styled-components"




const SeparatorStyled = styled.div`


padding: 20px 0 10px;

font-size:14px;
color: ${props => props.theme.pastelGray};
display: block;
display: flex;
gap: 20px;
justify-content: space-between;
align-items: center;
text-wrap: nowrap;
&::before, &::after{
    height: 1px;
    background-color: ${props => props.theme.pastelGray};
    content: '';
    width: 100%;
}
`
type Props = { legend?: string }

export default function FormSeparator({ legend = 'או התחברו דרך' }: Props) {
    return (
        <SeparatorStyled>{legend}</SeparatorStyled>
    )
}