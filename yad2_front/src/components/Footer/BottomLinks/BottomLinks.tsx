import styled from "styled-components";


type Props = {
    links: { text: string, href: string }[]
}


const BottomLinksStyled = styled.ul`
margin: 20px 0;
display: flex;
justify-content: center;
li{
    margin: 0 15px;
    a{
        color: ${props => props.theme.gray9};
        font-size: 14px;
        line-height: 20px;
        text-decoration: none;
    }
}
`;

export default function BottomLinks({ links }: Props) {
    return (
        <BottomLinksStyled>

            {links.map((link, i) => <li key={i}><a href={link.href}>{link.text}</a></li>)}
        </BottomLinksStyled>
    )
}