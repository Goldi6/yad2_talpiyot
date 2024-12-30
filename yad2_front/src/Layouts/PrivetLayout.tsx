import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components';
import Logo from '../components/Logo';
import AddButton from '../components/Nav/Buttons/AddButton';
import UserProfileCircle from '../features/ProfileImage/UserImage/UserProfileCircle';

const StyledLayoutContainer = styled.div`
display: block;
box-sizing: border-box;
/* width: 100vw; */
max-width: 100vw;

`;


const StyledHeader = styled.header`
border-top:4px solid rgb(255 113 0/1);
display: flex;
justify-content: space-between;
align-items: center;
background-color: #fff ;
padding: 0 16px;
height: 75px;
margin-bottom: 2rem;
box-shadow: 0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);
&>div{
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: center;
    flex-direction: row;
    margin: 0 1rem;
    height: 100%;
}

.title{
    font-size: 1.5rem;
    color: #333;
    &:hover{
    color: ${props => props.theme.grayD3};
    cursor: pointer;
}
}
.logo{
height: 100%;
padding: .8rem 0;
img{
    height: 100%;
    max-width: auto;
}
}

`;


export default function PrivetLayout() {


    return (


        <StyledLayoutContainer>

            <StyledHeader>
                <div>
                    <Logo />
                    <div className='title'>
                        <Link to='/personal'>איזור אישי</Link>
                    </div>
                </div>
                <div>
                    <UserProfileCircle hideText={true} />
                    <AddButton />
                </div>
            </StyledHeader>
            <main>
                <Outlet />
            </main>

        </StyledLayoutContainer>
    )
}


