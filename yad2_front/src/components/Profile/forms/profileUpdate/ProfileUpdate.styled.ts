import styled from "styled-components";

export const StyledForm = styled.form`
  margin: auto;
  padding: 42px 27px;
  margin-bottom: 14rem;
  max-width: 1042px;


  .buttons-container{
    display: flex;
    justify-content: space-evenly;
    gap: 1rem;
  button{
    margin-top: 1rem;
    font-weight:bold ;
  }
  }

  #profile-image-container{
    display: flex;
    justify-content: center;
    height: fit-content;
  }

  #street-address-input {
    display: flex;
    justify-content: space-between;
    li:first-of-type {
      width:70%;
  
  
    }
    li:last-of-type {
      width:24%;
     }
  }

  

  fieldset {
    border: none;
    box-sizing: border-box;

    &:last-of-type > p {
      color: ${(props) => props.theme.gray9};
      font-size: 14px;
      margin-top: 0;
    }

    ul {
      display: flex;
      gap: 2rem;
      flex-direction: column;
    }

    legend {
      font-size: 18px;
      font-weight: 500;
      line-height: 1.5;
    }
    &:last-of-type {
      margin-top:40px;
      margin-bottom:72px;
    }

  }

  .placeholder{
    display: none;
  }
  @media screen and (min-width: ${(props) => props.theme.breakPoints.breakDesktopSmall}) {
    box-shadow: 0 2px 25px hsla(0, 0%, 42%, 0.088);

    background-color: #fff;
    display: grid;
    grid-template-columns: 251px auto;
    
  
  hr{
    display: none;
  }
    .placeholder{
      display: block;
    }
    fieldset {
      ul{
        display: grid;

        grid-template-columns: 1fr 1fr;
        gap: 3rem;
      }
    }
  }
`;

/////////

export const StyledBirthdayContainer = styled.div`
  color: rgb(${(props) => props.theme.purpleRGB});
  font-size: 14px;
  font-weight: 400;
  background-color: rgba(${(props) => props.theme.purpleRGB}, 0.1);
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  p {
    margin: 0;

    span {
      line-height: 1.5;
    }
  }
`;
export const StyledStars = styled.div`
  position: relative;
  width: 36px;
  height: 36px;
  /* border: 1px solid #ccc; */
  img {
    position: absolute;

    &:first-of-type {
      right: 0;
      top: 55%;
    }
    &:nth-of-type(2) {
      transform: rotate(10deg);
      left: 45%;
      top: 15%;
    }
    &:last-of-type {
      left: 5%;
      top: 45%;
    }
  }
`;
