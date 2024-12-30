import { StyledBirthdayContainer, StyledStars } from "../Profile/forms/profileUpdate/ProfileUpdate.styled";
import { BirthdayInputPersonal, NameInputPersonal, PhoneInputPersonal, SurnameInputPersonal } from "../fields/Index";

import star from '../../assets/extra/Star.webp'


type Props = {
    nameState: [string, React.Dispatch<React.SetStateAction<string>>];
    surnameState: [string, React.Dispatch<React.SetStateAction<string>>];
    phoneState: [string, React.Dispatch<React.SetStateAction<string>>];
    dateOfBirthState: [string, React.Dispatch<React.SetStateAction<string>>];
}

export default function PersonalFieldset({ nameState, surnameState, phoneState, dateOfBirthState }: Props) {



    return (
        <>
            <fieldset>
                <legend>פרטים אישיים</legend>
                <ul>
                    <NameInputPersonal state={nameState} />
                    <SurnameInputPersonal state={surnameState} />
                    <PhoneInputPersonal state={phoneState} />
                    <BirthdayInputPersonal state={dateOfBirthState} />
                    <div className='placeholder' ></div>
                    <StyledBirthdayContainer className="birthday-container">
                        <p>
                            <span>אולי נצליח להפתיע אותך עם</span>
                            <br />
                            <span>ברכה ביום ההולדת!</span>
                        </p>
                        <StyledStars>
                            <img src={star} alt="start" width={8} height={8} />
                            <img src={star} alt="start" width={13} height={13} />
                            <img src={star} alt="start" width={11} height={11} />
                        </StyledStars>
                    </StyledBirthdayContainer>
                </ul>
            </fieldset>
        </>
    );
};
