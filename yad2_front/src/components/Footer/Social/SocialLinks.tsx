import { ReactComponent as Apple } from '../../../assets/foo/apple.svg'
import { ReactComponent as GooglePlay } from '../../../assets/foo/googlePlay.svg'
import { ReactComponent as Youtube } from '../../../assets/foo/youtube.svg'
import { ReactComponent as Facebook } from '../../../assets/foo/facebook.svg'
import styled from 'styled-components'


const StyledSocialLinks = styled.ul`
    display: flex;
    justify-content: center;
    gap: 20px;
    li{
        width:35px;
        aspect-ratio: 1/1;
        border-radius: 50%;
        background-color: black;
    }
    a{color:white;
    display: grid;
    place-items: center;
    width:100%;
    height:100%;
    svg{width:20px;height:auto;}
    }

`;

export default function SocialLinks() {
    return (
        <StyledSocialLinks>
            <li><a href="/#"><Apple /></a></li>
            <li><a href="/#"><GooglePlay /></a></li>
            <li><a href="/#"><Facebook /></a></li>
            <li><a href="/#"><Youtube /></a></li>
        </StyledSocialLinks>
    )
}