import React from 'react'
import { businessLinks } from '../../../componentStaticData/navLinks';
import { ReactComponent as ChatSvg } from '../../../assets/icons/chat.svg';
import { ReactComponent as LikedSvg } from '../../../assets/icons/likes.svg';
import { ReactComponent as NotificationsSvg } from '../../../assets/icons/notifications.svg';
import { ReactComponent as CarComparisonSvg } from '../../../assets/icons/carComparison.svg';
import { ReactComponent as LastSearchesSvg } from '../../../assets/icons/lastSearches.svg';
import { ReactComponent as ProfileSvg2 } from '../../../assets/icons/big-profile.svg';
import { BusinessLink, BigProfileLink } from './LinkComponent';
import useUser from '../../../hooks/useUser';




type ProfileLinkProps = {
    classN?: BigProfileLinkClassN[],
    iconWidth?: number | 'auto',
    iconHeight?: number | 'auto',
    isBigProfileLink: boolean,
}


type BigProfileLinkClassN = '' | 'big-nav-profile-link' | 'big-nav-profile-link--mobile' | 'big-nav-profile-link--desktop' | 'big-nav-profile-link--tablet' | 'big-nav-profile-link--mobile--tablet' | 'big-nav-profile-link--desktop--tablet' | 'big-nav-profile-link--desktop--mobile';

export const useProfileLink = ({ classN = [], iconHeight, iconWidth, isBigProfileLink }: ProfileLinkProps) => {

    const { user } = useUser();
    // big link is located in the sidebar and the main nav
    const BigLink = () => (<BigProfileLink classN={classN.join(' ')} iconHeight={iconHeight} iconWidth={iconWidth} href={businessLinks.profile.href} text={businessLinks.profile.name} />);
    //TODO?
    const SmallLink = () => (<BusinessLink counterValue={null} baseClassN='profile-btn' text={user ? businessLinks.userProfile.name : businessLinks.profile.name} href={user ? businessLinks.userProfile.href : businessLinks.profile.href} Icon={ProfileSvg2} />);
    return isBigProfileLink ? <BigLink /> : <SmallLink />;

}

///////
///////
///////


type LinkClasses = 'hide-text' | 'icon-margin-10' | 'hide-text-on-screen-1300' | 'top-counter' | 'logout';

type LinkProps = {
    classN?: LinkClasses[],
    iconWidth?: number | 'auto',
    iconHeight?: number | 'auto',
}



export const useLikesIcoLink = ({ classN }: LinkProps) => {

    //TODO: likes hook
    const [counterValue, setCounterValue] = React.useState<number | null>(6);  //NOTE: no functionality yet

    return (<BusinessLink counterValue={counterValue} baseClassN='likes-btn' Icon={LikedSvg} text={businessLinks.liked.name} href={businessLinks.liked.href} classN={classN?.join(' ')} />);


}








////////////////////
// NOTE: Later Tasks
////////////////////
/////////////////////

export const useChatIcoLink = ({ classN }: LinkProps) => {

    //NOTE: no functionality yet
    const [counterValue, setCounterValue] = React.useState<number | null>(null);


    return (<BusinessLink counterValue={counterValue} Icon={ChatSvg} text={businessLinks.chat.name} href={businessLinks.chat.href} baseClassN='chat-btn' classN={classN?.join(' ')} />);

}

export const useNotificationsIcoLink = ({ classN }: LinkProps) => {

    //NOTE: no functionality yet
    const [counterValue, setCounterValue] = React.useState<number | null>(null);


    return (<BusinessLink counterValue={counterValue} Icon={NotificationsSvg} text={businessLinks.notifications.name} href={businessLinks.notifications.href} baseClassN='notifications-btn' classN={classN?.join(' ')} />);

}
export const useCarComparisonIcoLink = ({ classN }: LinkProps) => {

    //NOTE: no functionality yet
    const [counterValue, setCounterValue] = React.useState<number | null>(null);


    return (<BusinessLink counterValue={counterValue} Icon={CarComparisonSvg} text={businessLinks.carCompare.name} href={businessLinks.carCompare.href} baseClassN='car-compare-btn' classN={classN?.join(' ')} />);

}
export const useLastSearchesIcoLink = ({ classN }: LinkProps) => {

    //NOTE: no functionality yet
    const [counterValue, setCounterValue] = React.useState<number | null>(null);


    return (<BusinessLink counterValue={counterValue} Icon={LastSearchesSvg} text={businessLinks.lastSearches.name} href={businessLinks.lastSearches.href} baseClassN='last-searches-btn' classN={classN?.join(' ')} />);

}



