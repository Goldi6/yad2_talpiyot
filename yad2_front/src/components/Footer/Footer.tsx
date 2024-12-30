import FooNav from "./FooNav/FooNav"
import styled from "styled-components";
import SocialLinks from "./Social/SocialLinks";
import BottomLinks from "./BottomLinks/BottomLinks";
import { bottomLinks, navData } from "../../componentStaticData/fooLinks";

const FooStyled = styled.footer`
.foo-container{
    max-width: 950px;
    margin: auto;
    display: block;
}
  background-color: ${(props) => props.theme.baseColor};
  padding: 50px 0 10px;
  color: ${props => props.theme.gray9};
  @media screen and (max-width: 880px) {
    padding:25px
  }
  p{text-align:center;font-size:12px;line-height:20px;}
    hr{
        width: 420px;
    margin: auto;
    border-color: ${props => props.theme.gray9};
    }
    span{
        display: block;
    text-align: center;
    font-size: 14px;
    margin-top: 10px;
    }
`;


export default function Footer() {
    return (
        <FooStyled>

            <div className='foo-container' >


                <FooNav navData={navData} />
                <SocialLinks />
                <p>כל הזכויות שמורות לחברת קורל תל מפעילות לוח יד2 - לוח מודעות: דרושים, דירות להשכרה, בתים למכירה, בתים להשכרה, העברת בתים, הובלות, לימודים, קניות, בעלי מקצוע, אצבע, תיירות ועוד. אין לעשות שימוש בכל התכנים המופיעים בלוח יד2.</p>
                <hr />
                <BottomLinks links={bottomLinks} />
                <span>גרסה:production</span>
            </div>


        </FooStyled>
    )
}