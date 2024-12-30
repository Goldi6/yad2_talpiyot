import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { loginFeaturesItems } from '../componentStaticData/authLayout';
import Logo from '../components/Logo';
import BrokerLink from '../components/Auth/BrokerLink';
import { ReactComponent as BackArrow } from '../assets/icons/back-arrow.svg';

//TODO: getBackground color (peachy)
const StyledLayoutContainer = styled.div`
display: block;
box-sizing: border-box;
//max-height: 100vh;
max-width: 100vw;






//background-color: ${props => props.theme.peachPuff};


footer{
    height:114px;
}

&>div{

    width: 93%;
    margin: 0 auto;

    min-height: 100vh; 
    display: flex;
    flex-direction: column;
justify-content: space-between;

    @media screen and (max-width: ${props => props.theme.breakPoints.breakMobileMedium}) {
    
    width: 100%;
    min-height: unset;
    
    }
}
`;

const StyledMainContainer = styled.div`
margin: auto;
padding:30px;
max-width: 1230px;
display: flex;
justify-content: center;
align-items: center;
height: max-content;


.back-btn{
    position: fixed;
    top:32px;
    left: 20px;
}

  
.auth-box{
    background: ${props => props.theme.snow};
    width: 510px;
    box-shadow: 0 3px 10px 0 rgba(0,0,0,.1);
    padding: 35px 35px 15px;
    border-radius: 4px;
    position: relative;
    &> div{
        margin-bottom:20px;
    }
 
}
@media screen and (max-width: ${props => props.theme.breakPoints.breakMobileMedium}) {
     padding: 0;
     margin: 0;
     height: 100vh;
display: block;
position: relative;
background-color: ${props => props.theme.white};


footer{display:none}
    
    .auth-box{
        width: 100%;
        padding: 20px;
        box-shadow: unset;
        position: unset;
        background-color: ${props => props.theme.white};


    }
}

.login-info{
    width: 450px;
    margin-right: 200px;

    .title-big{
        all: unset;
        font-size:36px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
    }
    .features-item-list{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top:40px;
        .features-item{
            display: flex;
            flex-direction: column;
            align-items: center;
    
            span{
            
                margin-top: 10px;
            
            }
           
        }
    }
}

`;

export default function AuthLayout() {

    const navigate = useNavigate();

    const location = useLocation();
    const isResetPassword = location.pathname.includes('reset-password');
    const isLogin = location.pathname.includes('login');


    return (


        <StyledLayoutContainer>
            <div>
                <header>
                    <Logo />
                </header>
                <main>
                    <StyledMainContainer>
                        <section className='auth-box'>
                            <button className='back-btn hide-on-desktop' onClick={() => navigate(-1)}><BackArrow /></button>
                            {isLogin && <BrokerLink />}
                            <div>
                                <Outlet />
                            </div>
                        </section>
                        {!isResetPassword && <section className='login-info hide-on-tablet'>
                            <h1 className='title-big'>
                                <span>לקנות מהר, למכור מהר.</span>
                                <span>ויש לנו אחלה כלים לזה.</span>
                            </h1>
                            <ul className='features-item-list'>
                                {loginFeaturesItems.map((item, i) => <LoginFeaturesItem key={i} {...item} />)}
                            </ul>
                        </section>}
                    </StyledMainContainer>
                </main>
                <footer></footer>
            </div>
        </StyledLayoutContainer>
    )
}


type FeaturesItemProps = {

    imgSrc: string;
    text: string;
    altText: string;
}

function LoginFeaturesItem({ imgSrc, text, altText }: FeaturesItemProps) {

    return (
        <li className='features-item'>
            <img height={60} width={60} src={imgSrc} alt={altText} />
            <span>{text}</span>
        </li>
    )

}