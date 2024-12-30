import { deleteProfileImage } from "../../../services/profileImage";
import { useSWRConfig } from "swr";
import { StyledContainer } from "./ProfileImageOptions.styled";
import ProfileImageUploadContainer from "../Options/ProfileDropZoneContainer/ProfileImageUploadContainer";
import DeleteProfileImagePrompt from "../Options/DeleteProfileImagePrompt/DeleteProfileImagePrompt";






type Props = {

    optionsRef: React.MutableRefObject<any>;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    setModalContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
}

export default function ProfileImageOptions({ setModalContent, setShowModal, optionsRef }: Props) {



    const openFileInput = (e: React.MouseEvent<HTMLLIElement>
    ) => {
        setShowModal(true);
        setModalContent(<ProfileImageUploadContainer setModalIsOpen={setShowModal} />);
    };
    const openFileDeletion = () => {

        setShowModal(() => true);
        setModalContent(<DeleteProfileImagePrompt setModalIsOpen={setShowModal} />);


    };



    return (
        <>
            <StyledContainer ref={optionsRef} >
                <ul>
                    <li onClick={openFileInput}>בחירת תמונה חדשה</li>
                    <li onClick={openFileDeletion}>מחיקת תמונה</li>
                </ul>
            </StyledContainer>

        </>
    );
};
