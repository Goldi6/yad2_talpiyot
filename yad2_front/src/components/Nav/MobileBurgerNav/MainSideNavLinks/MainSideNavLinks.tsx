
import { useCarComparisonIcoLink, useChatIcoLink, useLastSearchesIcoLink, useLikesIcoLink, useNotificationsIcoLink } from '../../BusinessLinks/BusinessLinks';


export default function MainSideNavLinks() {

    const ChatIcoLink = useChatIcoLink({});
    const LikesIcoLink = useLikesIcoLink({});
    const LastSearchesIcoLink = useLastSearchesIcoLink({});
    const NotificationsIcoLink = useNotificationsIcoLink({});
    const CarComparisonIcoLink = useCarComparisonIcoLink({});

    return (
        <ul>

            <li>
                {ChatIcoLink}
            </li>
            <li>

                {LikesIcoLink}
            </li>
            <li>
                {LastSearchesIcoLink}

            </li>
            <li>
                {NotificationsIcoLink}

            </li>
            <li>

                {CarComparisonIcoLink}
            </li>

        </ul>
    )
}