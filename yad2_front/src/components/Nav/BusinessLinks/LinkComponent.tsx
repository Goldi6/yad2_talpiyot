import { Circle, ProfileLinkStyled, ProfileLoggedInLinkStyled, StyledLink } from "./BusinessLinks.styled";
import { ReactComponent as BigProfileSvg } from '../../../assets/icons/big-profile.svg';
import useUser from "../../../hooks/useUser";
import { Link } from "react-router-dom";
import AlternativeImage from "../../../features/ProfileImage/UserImage/AlternativeImage";

type Props = {
    text: string,
    href: string,
    classN?: string,
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
    iconWidth?: number | 'auto',
    iconHeight?: number | 'auto',
    counterValue: number | null,
    baseClassN: 'profile-btn' | 'likes-btn' | 'chat-btn' | 'notifications-btn' | 'last-searches-btn' | 'car-compare-btn',
}


export function BusinessLink({ baseClassN, counterValue, Icon, text, href, classN, iconWidth = 24, iconHeight = 24 }: Props) {

    const isTopCounter = classN?.includes('top-counter');
    //TODO: 
    return (
        <StyledLink to={href} className={classN ? classN + " " + baseClassN : baseClassN}>
            {/* <div className="business-link"> */}
            {/* <span className="business-link-icon"> */}
            {isTopCounter && <div className="profile-icon-container">
                {counterValue && counterValue > 0 && <Circle className='circle'>{counterValue}</Circle>}
                <Icon width={iconWidth} height={iconHeight} />

            </div>}
            {!isTopCounter && <Icon width={iconWidth} height={iconHeight} />}
            <span className="business-link-text">
                {text}
            </span>
            {counterValue && !isTopCounter && counterValue > 0 && <Circle className='circle'>{counterValue}</Circle>}
            {/* </span> */}

            {/* </div> */}
        </StyledLink>
    )
}




type ProfileProps = {
    text: string,
    href: string,
    classN?: string,
    iconWidth?: number | 'auto',
    iconHeight?: number | 'auto',

}
export function BigProfileLink({ classN, text, href, iconHeight, iconWidth }: ProfileProps) {


    const { user } = useUser();
    const username = user?.username;



    const GuestComponent = () => (<ProfileLinkStyled to={href} className={`profile-btn ${classN}`}>
        <span className="profile-icon">
            <BigProfileSvg height={iconHeight} width={iconWidth} />

        </span>
        <span className="profile-icon-text">
            {text}
        </span>
    </ProfileLinkStyled>)

    const UserComponent = () => (<ProfileLoggedInLinkStyled className={`profile-btn ${classN}`}>
        <span className="profile-icon">
            <AlternativeImage height={iconHeight} width={iconWidth} />
        </span>
        <div className='container'>
            <span className="profile-icon-text">
                {username}
            </span>
            <Link to='/personal' className="profile-link">
                אזור אישי
            </Link>
        </div>
    </ProfileLoggedInLinkStyled>)


    return !user ? <GuestComponent /> : <UserComponent />;


}