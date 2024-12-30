import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";


type Props = {
    children: React.ReactNode;
    title: string;
    onSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void;

}

const StyledForm = styled.form`

ul{
    margin-top: 25px;
}

fieldset{
    margin: 0;
    padding: 0;
    border: none;
    legend{
        font-size: 24px;
        text-align: center;
 margin: auto;
    }
}
@media screen and (max-width: ${props => props.theme.breakPoints.breakMobileMedium}) {

legend{
    padding-top: 30px;
}
}

.auth-message{
    display: flex;
    flex-direction:column;
    place-items: center;
    justify-content: center;
    font-size: 14px;
    text-align: center;
    margin: 0 auto;
    margin-top:20px;
}


`;

export default function AuthForm({ children, title, onSubmitForm }: Props) {
    return (
        <ThemeProvider theme={theme}>

            <StyledForm onSubmit={onSubmitForm} noValidate>
                <fieldset>
                    <legend>{title}</legend>
                    {children}
                </fieldset>
            </StyledForm>
        </ThemeProvider>
    )
}