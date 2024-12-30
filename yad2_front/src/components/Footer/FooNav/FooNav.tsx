import { ScreenContext } from '../../../Context/ScreenContext'
import { ReactComponent as Arrow } from '../../../assets/foo/arrow.svg'
import { StyledFooNav } from "./FooNav.styled"
import { useContext, useRef, useState } from "react"
import { Link } from "react-router-dom"
type Props = {
    navData: { title: string, list: { text: string, href: string }[] }[]
}


type LinkProps = {

    title: string,
    links: { text: string, href: string }[]


}

const Section = (link: LinkProps) => {
    const [ open, setOpen ] = useState(false);

    const isSmallBrakePoint = useContext(ScreenContext);




    const listRef = useRef<HTMLUListElement>(null);

    return (<li className={`${isSmallBrakePoint && 'mobile'}`}>
        <div className={`foo-nav-title ${isSmallBrakePoint && 'mobile'}`} onClick={() => setOpen((p) => !p)}>
            <h6 >{link.title}</h6>
            {isSmallBrakePoint && <Arrow className={`arrow ${!open && ' arrow-closed'}`} />}
        </div>
        {isSmallBrakePoint ?

            <ul ref={listRef} className={` mobile foo-nav-list ${!open && 'drop-menu-closed'}`} style={{ height: !open ? '0' : listRef.current?.scrollHeight }}>
                {link.links.map((link, i) => (<li key={i} className='foo-nav-list-item'><Link to={link.href}>{link.text}</Link></li>))}
            </ul>
            :
            <ul className={` foo-nav-list `} >
                {link.links.map((link, i) => (<li key={i} className='foo-nav-list-item'><Link to={link.href}>{link.text}</Link></li>))}
            </ul>
        }
    </li>)
}



export default function FooNav({ navData }: Props) {


    return (
        <nav style={{ marginBottom: '20px' }}>
            <StyledFooNav >
                {navData.map((link, index) => (<Section key={index} title={link.title} links={link.list} />))}
            </StyledFooNav>
        </nav>
    )
}