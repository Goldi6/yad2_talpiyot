import styled from 'styled-components';


export const StyledProfileImageContainer = styled.div`
    position: relative;
    display: inline-block;
    button{
        position: absolute;
        bottom: 0;
        right: 0;
        padding:3px;
        aspect-ratio: 1;
        border: 1px solid #eee;
        border-radius: 50%;
    background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
      
    }
    @media screen and (min-width: ${(props) => props.theme.breakPoints.breakDesktopSmall}) {
    
        button{
            height: 48px;
            width: 48px;
           svg {
            height: 26px;
            width: 26px;
           }
        } 
    }
`;

export const StyledImageContainer = styled.div`
    border-radius: 50%;
    width: 82px;
    height: 82px;
    display: block;
    overflow: hidden;
    .profile-image-txt{
            font-size: 1.5rem;
        }
    @media screen and (min-width: ${(props) => props.theme.breakPoints.breakDesktopSmall}) {
   
        width: 118px;
        height: 118px;
        .profile-image-txt{
            font-size: 2rem ;
        }
      
    }
   
`;





