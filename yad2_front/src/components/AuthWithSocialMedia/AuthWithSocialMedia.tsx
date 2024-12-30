
import styled from 'styled-components';
// import { authWith_Buttons } from '../../../componentStaticData/authLayout';
import { authWith_Buttons } from './data_config';

const StyledContainer = styled.div`


display:flex;
gap: 15px;
&:nth-of-type(2){
    button{
img{
    margin-bottom:4px;

}
}  
  }

button{
    border-radius: ${props => props.theme.buttonBorderRadius};
    height: ${props => props.theme.authButtonHeight};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    img{
        margin-left:5px;
      
    }
}
span{
    line-height: 1.35;
}

`;


type AuthButtonProps = {
    text: string;
    imgSrc: string;
    altText: string;
    height: number;
    width: number;

}
const SocialMediaButton = ({ text, altText, imgSrc, height, width }: AuthButtonProps) => {

    function handleClick() {
        throw new Error('Not implemented');
    }

    return (
        <button onClick={handleClick} className='btn-white'>
            <img src={imgSrc} alt={altText} height={height} width={width} />
            <span>{text}</span>
        </button>
    );
};

export default function AuthWithSocialMedia() {
    return (
        <StyledContainer>
            {authWith_Buttons.map((button, i) => (<SocialMediaButton key={i} {...button} />))}
        </StyledContainer>
    );
}