import styled from "styled-components";
import useUser from "../../../hooks/useUser";



type Props = {
    height?: number | "auto" | undefined;
    width?: number | "auto" | undefined;
}

const StyledAlternativeImg = styled.div`
background-color:rgb(255 241 229/1);
color: rgb(255 113 0/1);
display: grid;
place-items: center;
width: 100%;
height: 100%;

`

export default function AlternativeImage({ height, width }: Props) {

    const { user } = useUser();


    const imgSrc = user?.profile_image;
    const username = user?.username;
    let alternativeImg = username.split(' ');
    alternativeImg = alternativeImg[0][0] + alternativeImg[1][0];


    return (
        <>
            {imgSrc === null ? <StyledAlternativeImg className='profile-image-txt'>
                {alternativeImg}
            </StyledAlternativeImg> :
                <img style={{ width: "100%" }} src={imgSrc} alt="profile" height={height} width={width} />
            }
        </>
    );
};
