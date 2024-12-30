import { BannerStyled } from "./IndexBanner.styled"
import BannerImg from '../../../assets/indexBanner/bigBanner.svg'
import { useState } from "react"

type Props = {}

const banners = [ { src: BannerImg, alt: 'banner' }, { src: BannerImg, alt: 'banner' } ];




export default function IndexBanner({ }: Props) {

    const [ currentIndex, setCurrentIndex ] = useState(0)


    const setIndex = (index: number) => {

    }


    const Banner = (i: number) => (<div className='banner-img'>
        <img src={BannerImg} alt="banner" />
    </div>)

    const Dot = (i: number) => (<span onClick={() => setIndex(i)} className='dot'></span>)

    return (
        <BannerStyled>
            <div className='banner-wrapper'>


            </div>
            <div className='banned-dots'>

            </div>

        </BannerStyled>
    )
}