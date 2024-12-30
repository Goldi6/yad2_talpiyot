
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainer = styled.div`

a{
    float:left;
    margin-top:0;
    font-weight:500;
    color: ${props => props.theme.orange};
    }
`;

export default function ForgotPassword() {
    return (
        <StyledContainer><Link to='/auth/reset-password'>שכחתי סיסמה</Link></StyledContainer>
    )
}