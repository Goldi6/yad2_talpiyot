import styled from "styled-components";

const DropMenuStyled = styled.ul`
  position: absolute;
  min-width: 225px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  box-sizing: content-box;
  //grid-auto-flow: column;
  line-height: 25px;
  padding: 25px;
  background-color: #fff;
  // grid-auto-flow: dense;

  display: none;
  width: max-content;
  overflow: hidden;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2);
`;

export default DropMenuStyled;
