import { SideNavCloseButton, SideNavHeader, SideNavAvatar, SideNavLogout, StyledSideNav } from "./SideNav.styled"
import MainSideNavLinks from "./MainSideNavLinks/MainSideNavLinks"

import { ReactComponent as CloseSvg } from '../../../assets/icons/close.svg';
import React from "react";
import Modal from "../../Modal/Modal";
import { useProfileLink } from "../BusinessLinks/BusinessLinks";
import AddButton from "../Buttons/AddButton";
import { useLogoutButton } from "../Buttons/LogoutButton";
import useUser from "../../../hooks/useUser";





type Props = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isOpen: boolean;
}

export default function SideNav({ setIsOpen, isOpen }: Props) {
    const { user } = useUser();
    const ProfileLink = useProfileLink({ isBigProfileLink: true, iconHeight: 48, iconWidth: 35 });
    const LogoutLink = useLogoutButton({ classN: ['subnav-btn'] });




    return (
        <Modal setIsOpen={setIsOpen} isOpen={isOpen}  >

            <StyledSideNav className={isOpen ? 'open' : 'closed'}>
                <SideNavHeader>
                    {user && <SideNavLogout>
                        {LogoutLink}
                    </SideNavLogout >}
                    <SideNavCloseButton >
                        <CloseSvg onClick={() => setIsOpen(false)} />
                    </SideNavCloseButton>
                    <SideNavAvatar className={user ? 'user' : ''}>
                        {ProfileLink}
                    </SideNavAvatar>
                    <div className="add-button-container">
                        <AddButton />
                    </div>
                </SideNavHeader>
                <MainSideNavLinks />

            </StyledSideNav>



        </Modal>
    )
}