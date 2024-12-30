
import { useContext } from 'react';
import { ScreenContext } from '../Context/ScreenContext';
import LogoImg from '../assets/logo/logo-default.svg';
import LogoImg_Prf from '../assets/logo/yad2Logo_prf.png';
import { Link, useLocation } from 'react-router-dom';



export default function Logo() {

    const isSmallScreen: boolean = useContext(ScreenContext);
    const location = useLocation();
    const isAuthPage = location.pathname.includes('/auth');
    const isProfilePage = location.pathname.includes('/personal');

    const DefaultLogo = () => <Link to={'/'} className='logo' ><img height={isSmallScreen && !isAuthPage ? '25px' : isAuthPage ? '36px' : '37px'} width='auto' style={{ display: isAuthPage && isSmallScreen ? 'none' : '', padding: isAuthPage ? '30px' : '' }} src={LogoImg} alt="logo" /></Link>
    const ProfileLogo = () => <Link to={'/'} className='logo' ><img height={'auto'} width={'auto'} src={LogoImg_Prf} alt="logo" /></Link>


    return (
        isProfilePage ? <ProfileLogo /> : <DefaultLogo />
    )
}