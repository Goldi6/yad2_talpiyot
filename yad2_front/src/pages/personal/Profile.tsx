import styled from "styled-components";
import ProfileUpdateForm from "../../components/Profile/forms/profileUpdate/ProfileUpdateForm";



// type Props = {}

const StyledTitle = styled.div`
font-size: 1.5rem;
margin: 0 27px 20px 27px;
display: block;


`

const StyledContainer = styled.div`

padding:  0 .5rem;
display: block;
`;

export default function Profile() {



    return (
        <>
            <StyledContainer>
                
                <div>
                    <StyledTitle>עדכון פרטים</StyledTitle>
                    <ProfileUpdateForm />
                </div>
            </StyledContainer>
        </>
    );
};
