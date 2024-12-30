import styled from "styled-components";
import { ReactComponent as DoorSvg } from '../../../assets/icons/door.svg';
import { businessLinks } from "../../../componentStaticData/navLinks";
import { getAuth } from "../../../services/authFetch";
import useSWR, { useSWRConfig } from 'swr'



export const StyledButton = styled.button`
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
  &.subnav-btn{
    .business-link-text {
    height: unset;
    
  }
  }
`;


type ActionLinkProps = {
  text: string,
  classN?: string,
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
  iconWidth?: number | 'auto',
  iconHeight?: number | 'auto',
  baseClassN: 'logout-btn',
  clickCallback: () => void,
};



export function ActionButton({ clickCallback, baseClassN, Icon, text, classN, iconWidth = 24, iconHeight = 24 }: ActionLinkProps) {



  function onClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    clickCallback();
  }


  return (
    <StyledButton onClick={onClick} className={classN ? classN + " " + baseClassN : baseClassN}>


      <Icon width={iconWidth} height={iconHeight} />
      <span className="business-link-text">
        {text}
      </span>
    </StyledButton>
  )


}


type btnProps = {
  classN?: string[],
}

export const useLogoutButton = ({ classN }: btnProps) => {


  async function logout() {
    console.warn('logout');
    await getAuth('logout');
  }

  return (<ActionButton Icon={DoorSvg} text={businessLinks.logout.name} baseClassN='logout-btn' classN={classN?.join(' ')} clickCallback={logout} />);
};
