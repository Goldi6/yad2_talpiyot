import { Link } from "react-router-dom";
import styled from "styled-components";

export const Circle = styled.div`
  background-color: ${(props) => props.theme.orange};
  color: ${(props) => props.theme.white};
  border-radius: 6px;
  font-size: 10px;
  line-height: 12px;
  min-height: 12px;
  min-width: 12px;
  /* padding: 1px 2px; */
  padding: 0 5px;
  min-width: 12px;
  display: grid;
  place-items: center;
  margin-right: 5px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 100%;

  .business-link-text {
    display: none;
  }

  &.top-counter {
    .circle {
      position: absolute;
      top: -5px;
      right: -3px;
    }
  }

  .profile-icon-container {
    position: relative;
  }

  &.hide-text {
    .business-link-text {
      display: none;
    }
  }
  .business-link-text {
    height: 50px;
    display: flex;
    align-items: center;
  }

  svg {
    margin-left: 10px;
  }
  &.icon-margin-10 {
    svg {
      margin-right: 10px;
    }
  }

  &.hide-text-on-screen-1300 {
    @media screen and (max-width: 1380px) {
      .business-link-text {
        display: none;
      }
    }
  }
`;

export const ProfileLinkStyled = styled(Link)`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  .profile-icon {
    width: 50px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: ${(props) => props.theme.lightGray};
    border: 1px solid ${(props) => props.theme.pastelGray};
    display: flex;
    align-items: center;
    justify-content: center;
    svg ,img{
      margin: 0 6.5px;
    }
  }
  .profile-icon-text {
    margin-top: 10px;
  }

  &.big-nav-profile-link {
    flex-direction: row;

    margin: 0 20px;
    .profile-icon-container {
      height: min-content;
      position: relative;
    }
    .profile-icon {
      width: 40px;
      aspect-ratio: 1/1;
      border-radius: 50%;
      background-color: ${(props) => props.theme.lightGray};
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid ${(props) => props.theme.pastelGray};
    }
    .profile-icon-text {
      margin-top: 0;
      margin-right: 5px;
    }
  }
`;


export const ProfileLoggedInLinkStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  margin-top: 15px;
  gap: 10px;

  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
  }

  .profile-icon {
    width: 50px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: ${(props) => props.theme.lightGray};
    border: 1px solid ${(props) => props.theme.safetyOrange};
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    svg ,img{
      margin: 0 6.5px;
    }
 
  }
  .profile-icon-text {
    /* margin-top: 5px; */
  }
  .profile-link{
    font-size: 14px;
    color:#363636;
    font-weight: 100;
    text-decoration: underline;
    margin-top: 5px;
  }

  &.big-nav-profile-link {
    flex-direction: row;

    margin: 0 20px;


    .profile-link{
      display: none;
    }
    .profile-icon-container {
      height: min-content;
      position: relative;
    }
    .profile-icon {
      width: 40px;
      aspect-ratio: 1/1;
      border-radius: 50%;
      background-color: ${(props) => props.theme.lightGray};
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid ${(props) => props.theme.safetyOrange};
    }
    .profile-icon-text {
      margin-top: 0;
      margin-right: 5px;
    }
  }
`;