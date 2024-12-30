import styled from "styled-components";

export const MaiNavStyled = styled.nav`
  padding: 0 20px;
  min-height: 64px;
  box-shadow: 0 3px 10px 0 rgba(var(--black), 0.1);
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  &.mobile {
    padding: 0 10px;
    height: 45px;
    min-height: auto;
    justify-content: space-between;
  }
  .logo-nav {
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  .nav-icon {
    padding: 0 10px;
  }
`;
