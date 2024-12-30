import styled from "styled-components";



const StyledButton = styled.button`
margin-top: 30px;
text-align: center;
border-radius: 30px;
height: ${props => props.theme.authButtonHeight};
width: 100%;
`;


export const StyledConfirmButtons = styled.div`


margin: 36px 0 ;
display: flex;
justify-content: space-between;
gap: 1.5rem;

button{
    height: 40px;
    border-radius: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }



`;