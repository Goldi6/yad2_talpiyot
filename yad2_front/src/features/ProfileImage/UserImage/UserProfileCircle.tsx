import styled from "styled-components";
import useUser from "../../../hooks/useUser";
import AlternativeImage from "./AlternativeImage";




const StyledProfileIcon = styled.div`

display: flex;
gap: 8px;
flex-direction: row;
justify-content: start;
align-items: center;

.profile-icon {
    width: 48px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: ${(props) => props.theme.lightGray};
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    svg ,img{
        margin: 0 6.5px;
    }
    border: unset;
  
  }

`

type Props = {
    hideText?: boolean;
}

export default function UserProfileCircle({ hideText = false }: Props) {



    const { user } = useUser();
    const username = user?.username;

    return (
        <StyledProfileIcon>
            <div className="profile-icon">
                <AlternativeImage height={48} width={48} />
            </div>


            {!hideText && <div>{username}</div>}
        </StyledProfileIcon >
    )
};
