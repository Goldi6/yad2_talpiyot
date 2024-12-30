import { StyledForm } from "./ProfileUpdate.styled";
import { useState } from "react";
import ProfileImageInput from '../../../../features/ProfileImage/ProfileImageInput';
import { CancelButton, SaveButton } from '../../../Buttons';
import { Val } from '../../../fields/autocomplete/types';
import PersonalFieldset from '../../../FieldSets/PersonalFieldset';
import AddressFieldset from '../../../FieldSets/AddressFieldset';


export default function ProfileUpdateForm() {

    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [dateOfBirth, setDateOfBirth] = useState<string>('');
    const [city, setCity] = useState<Val | null>(null);
    const [street, setStreet] = useState<string>('');
    const [houseNumber, setHouseNumber] = useState<string>('');


    return (
        <>
            <StyledForm action="">
                <div id='profile-image-container'>
                    <ProfileImageInput />
                </div>
                <div>
                    <PersonalFieldset nameState={[name, setName]} surnameState={[surname, setSurname]} phoneState={[phone, setPhone]} dateOfBirthState={[dateOfBirth, setDateOfBirth]} />
                    <AddressFieldset cityState={[city, setCity]} streetState={[street, setStreet]} houseNumberState={[houseNumber, setHouseNumber]} />

                    <hr />
                    <div className='buttons-container'>
                        <CancelButton />
                        <SaveButton />
                    </div>
                </div>

            </StyledForm>
        </>
    );
};
