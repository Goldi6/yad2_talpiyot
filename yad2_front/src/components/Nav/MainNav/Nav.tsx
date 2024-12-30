import { useContext } from 'react';
import { ScreenContext } from '../../../Context/ScreenContext';
import Logo from '../../Logo';
import NavLinks from '../NavLinks/NavLinks';
import { useChatIcoLink, useLikesIcoLink, useProfileLink } from '../BusinessLinks/BusinessLinks';
import { MaiNavStyled } from './Nav.styled';
import AddButton from '../Buttons/AddButton';
import MobileBurgerNav from '../MobileBurgerNav/MobileBurgerNav';
import UserActionLinks from '../UserActionLinks/UserActionLinks';
import styled from 'styled-components';







const SmallNav = () => {
    const ChatIcoLink = useChatIcoLink({ classN: ['hide-text', 'icon-margin-10'] });
    return (
        <>
            <MobileBurgerNav />
            <Logo />

            {ChatIcoLink}
        </>
    )

}


const HoverBlockStyled = styled.div`

section{
    display: none;
    &:hover{

        cursor:pointer;
        display: block;
    }
}
span:hover + section{
    cursor:pointer;
    display: block;

}


`;

const BigNav = () => {
    const ProfileLink = useProfileLink({ classN: ['big-nav-profile-link'], iconHeight: 38, iconWidth: 25, isBigProfileLink: true });

    const LikesIcoLink = useLikesIcoLink({ classN: ['icon-margin-10', 'hide-text-on-screen-1300', 'top-counter'] });





    return (
        <>
            <div className='logo-nav'>
                <Logo />
                <NavLinks />
            </div>
            <HoverBlockStyled>

                <span>{LikesIcoLink}</span>
                <section>

                </section>

            </HoverBlockStyled>
            <HoverBlockStyled>

                <span >{ProfileLink}</span>
                <section >

                    <UserActionLinks />
                </section>
            </HoverBlockStyled>
            <AddButton />
        </>
    )

}


export default function Nav() {



    const isSmallScreen: boolean = useContext(ScreenContext);


    return (
        <MaiNavStyled className={isSmallScreen ? "mobile" : ""}>
            {isSmallScreen ? <SmallNav /> : <BigNav />}

        </MaiNavStyled>
    )
}