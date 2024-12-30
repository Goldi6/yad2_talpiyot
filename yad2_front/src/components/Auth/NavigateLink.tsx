import { Link } from 'react-router-dom'
import styled from 'styled-components';

type Props = {
    text: string;
    linkText: string;
    url: string;
    classN?: string;
    replace?: boolean;
    afterText?: string;
}

const StyledContainer = styled.div`

&.small{
    font-size: 14px;

}

display: flex;
justify-content: center;
align-items: center;
margin-top: 30px;

a{
    color: ${props => props.theme.orange};
    font-weight: 500;
}
`;

export default function NavigateLink({ classN, text, linkText, url, replace, afterText }: Props) {
    return (
        <StyledContainer className={`${classN} link-container`} >
            <span>{text}</span>
            &nbsp;
            <Link to={url} replace={replace}>{linkText}</Link>
            &nbsp;
            {afterText && <span>{afterText}</span>}
        </StyledContainer>
    )
}