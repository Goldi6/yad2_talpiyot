import styled from "styled-components";

const StyledInput = styled.li`
  display: flex;
  flex-direction: column;

  margin-bottom: 10px;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Works for Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  &:first-of-type {
    label {
      margin-top: 10px;
    }
  }
  label {
    margin-top: 20px;
    padding-bottom: 5px;
  }
  .input-container {
    position: relative;
    input {
      box-sizing: border-box;
      padding: 10px 15px 10px 35px;
      width: 100%;
      font-size: 16px;
      height: 50px;
      border-radius: 5px;
      border: 1px solid ${(props) => props.theme.pastelGray};

      &:focus,
      &:hover {
        outline: none;
        border: 1px solid ${(props) => props.theme.jet};
      }
      &.error {
        border: 1px solid ${(props) => props.theme.errorColor};
      }
    }
    button {
      position: absolute;
      left: 15px;
      top: 50%;
      transform: translateY(-50%);
      height: 20px;
      color: ${(props) => props.theme.gray9};
      &.hide {
        opacity: 0;
      }
      &:hover {
        color: ${(props) => props.theme.jet};
      }
    }
  }
  .input-error {
    color: ${(props) => props.theme.errorColor};
    margin: 5px 0 0 0;
    font-size: 14px;
  }
`;

export const StyledInputError = styled.p`
  color: ${(props) => props.theme.errorColor};
  margin: 5px 0 0 0;
  font-size: 14px;
`;

export const StyledInputProfile = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
 

  label {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
  }

  input {
    width: 100%;
  min-width: 0;
    border: 1px solid ${(props) => props.theme.pastelGray};
    border-radius: 4px;
    padding: 8px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    transition: border-color 0.2s ease-in-out;
    padding: 8px 23px;
/* width: auto; */
    &:hover {
      border: 1px solid #000;
    }

    &:focus {
      outline: none;
      border: 1px solid #000;
    }
    
  }

  .input-error {
    color: ${(props) => props.theme.errorColor};
    margin: 5px 0 0 0;
    font-size: 14px;
  }
`;

export default StyledInput;
