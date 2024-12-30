import styled from "styled-components";



export const StyledSideNav = styled.div`
  height: 100vh;
  position: fixed;
  background-color: #fff;
  a {
    white-space: nowrap;
  }
  width: 315px;
  transition: right 0.3s ease-in-out;
  top: 0;
  &.open {
    right: 0;
    backdrop-filter: brightness(60%);
  }
  &.closed {
    right: -100%;
  }

  .add-button-container {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
`;

export const SideNavCloseButton = styled.button`
  all: unset;
  margin: 12px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;


export const SideNavLogout = styled.div`
  all: unset;
  margin: 12px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  color: #999;
  font-size: 14px;
  svg{
    display: none;
  }
`;
export const SideNavAvatar = styled.div`
  padding: 25px 0;
  display: flex;
  justify-content: center;
  font-weight: 500;
  &.user{
    justify-content: flex-start;
    margin-right: 20px;
  }
  `;

export const SideNavHeader = styled.div`
display: block;
background-color: #f8f8f8;
 /* background-color: #333; */
 padding-bottom: 19px;
 .add-button-container{
  position: absolute;
  left: 0;
  right: 0;
 }
`;