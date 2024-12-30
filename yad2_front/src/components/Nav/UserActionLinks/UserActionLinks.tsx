import styled from "styled-components";
import { useCarComparisonIcoLink, useChatIcoLink, useLastSearchesIcoLink, useLikesIcoLink, useNotificationsIcoLink, useProfileLink } from "../BusinessLinks/BusinessLinks";
import { useLogoutButton } from "../Buttons/LogoutButton";
import useUser from "../../../hooks/useUser";




const StyledUserActionLinks = styled.ul`

position: absolute;


li{
    padding: 0 20px 0 30px;
    background-color: #f8f8f8;
    font-size: 14px;
    font-weight: 100;
    white-space: nowrap;
 &.last-item{
    border-top: 1px solid #eee;
 }
}
`;//TODO: styled list for all those links


export default function UserActionLinks() {

    // const ChatIcoLink = useChatIcoLink({});
    // const LikesIcoLink = useLikesIcoLink({});
    const LastSearchesIcoLink = useLastSearchesIcoLink({});
    const NotificationsIcoLink = useNotificationsIcoLink({});
    const CarComparisonIcoLink = useCarComparisonIcoLink({});
    const LogoutIcoButton = useLogoutButton({});
    const ProfileIcoLink = useProfileLink({ isBigProfileLink: false })

    const { user } = useUser();


    return (
        <StyledUserActionLinks className='nav-ico-box' >

            {/* <li>
                {ChatIcoLink}
            </li>
            <li>

                {LikesIcoLink}
            </li> */}
            {user && <li className="nav-ico-link">
                {ProfileIcoLink}

            </li>}
            <li className="nav-ico-link">
                {LastSearchesIcoLink}

            </li>
            <li className="nav-ico-link">                {NotificationsIcoLink}

            </li>
            <li className="nav-ico-link">
                {CarComparisonIcoLink}
            </li>
            {user && <li className="nav-ico-link last-item">
                {LogoutIcoButton}
            </li>}

        </StyledUserActionLinks>
    )
}