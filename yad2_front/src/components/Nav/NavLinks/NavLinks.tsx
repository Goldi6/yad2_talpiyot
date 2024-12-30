import { Link } from 'react-router-dom';
import { mainLinks } from '../../../componentStaticData/navLinks';
import styled from 'styled-components';
import DropMenu from './DropMenu/DropMenu';


const StyledList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-wrap: nowrap;
    min-height: 64px;
    position: relative;
    li:hover{
        ul {
            display: flex;
        }
    }

`;

export default function NavLinks() {
    return (
        <StyledList className=' hide-on-tablet' >

            {mainLinks.map((link, i) =>
                <li className='nav-link' key={i}><Link to={link.href}>{link.name}</Link>

                    {link.links && link.rows && <DropMenu links={link.links} rows={link.rows} />}
                </li>

            )}


        </StyledList>
    )
}