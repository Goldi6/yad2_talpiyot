import { Link } from "react-router-dom";
import styled from "styled-components";


const StyledContainer = styled.div`
position: relative;
top: -80px;
width:100%;
display: flex;
justify-content: center;
@media screen and (max-width: ${props => props.theme.breakPoints.breakMobileMedium}) {
position: fixed;
    top: unset;
    bottom: -20px;
box-sizing: border-box;
background-color: ${props => props.theme.whiteHover};
padding: 18px 0;
width: 100vw;
right: 0;
left: 0;
}

`;

export default function BrokerLink() {
    return (
        <StyledContainer className=""><Link to='/other-domain'>כניסה למתווכים</Link></StyledContainer>
    )
}