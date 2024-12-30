import { ReactComponent as Burger } from '../../../assets/icons/burger.svg';
import { BurgerBlock } from './MobileBurgerNav.styled';
import SideNav from './SideNav';
import { useLikesIcoLink } from '../BusinessLinks/BusinessLinks';
import React, { useEffect } from 'react';
import useBreakPoint from '../../../hooks/useBreakPoint';



export default function MobileBurgerNav() {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const LikesIcoLink = useLikesIcoLink({ classN: ['icon-margin-10', 'hide-text', 'top-counter'] });
    const isSmallerScreen = useBreakPoint()

    useEffect(() => {
        if (!isSmallerScreen) setIsOpen(false);
    }, [isSmallerScreen])

    return (<>

        <BurgerBlock>
            <button onClick={() => setIsOpen(true)}>
                <Burger width={25} height={25} className='burger' />
            </button>
            {LikesIcoLink}
        </BurgerBlock>
        <SideNav setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
    )
}