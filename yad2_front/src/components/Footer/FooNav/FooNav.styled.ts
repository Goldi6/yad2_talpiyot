import styled from "styled-components";

export const StyledFooNav = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  color: ${(props) => props.theme.pastelGray};

  li.mobile {
    width: 100%;
    border-bottom: 1px solid #5a5a5a;
    padding: 15px 0;

    &:first-child {
      border-top: 1px solid #5a5a5a;
    }
  }

  @media screen and (max-width: 880px) {
    flex-direction: column;
    .arrow {
      transition: transform 0.2s ease-in-out;
      &.arrow-closed {
        transform: rotate(90deg);
      }
    }
  }

  .foo-nav-title {
    display: flex;
    place-items: center;
    justify-content: space-between;

    h6 {
      font-size: ${(props) => props.theme.fontSizeMedium};
      font-weight: 500;
      line-height: 1.5;
      margin: 0;
    }
  }

  .foo-nav-list {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    max-height: 203px;
    flex-wrap: wrap;
    transition: height 0.2s ease-in-out;

    &.mobile {
      flex-wrap: nowrap;
      max-height: fit-content;
    }

    .foo-nav-list-item {
      font-size: 1rem;
      line-height: 1.5;
      margin-bottom: 5px;
      min-width: 6rem;

      cursor: pointer;
      text-decoration: none;
      a {
        color: ${(props) => props.theme.pastelGray};
      }
    }
  }
`;
