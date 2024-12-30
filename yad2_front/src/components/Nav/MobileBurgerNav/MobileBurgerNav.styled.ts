import styled from "styled-components";

export const BurgerBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .icon-text {
    display: none;
  }
  .burger {
    padding: 7px 10px;
  }
  button {
    all: unset;
    cursor: pointer;
  }
`;
