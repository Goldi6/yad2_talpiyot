import DropMenuStyled from './DropMenu.atyled'
import { Link } from 'react-router-dom'

type Props = {
    links: { text: string, href: string }[],
    rows: number;

}

export default function DropMenu({ links, rows }: Props) {
    const height = rows * 35;
    return (
        <DropMenuStyled style={{ height }}>

            {links.map((link, i) => <Link key={i} to={link.href}>{link.text}</Link>)}

        </DropMenuStyled>
    )
}