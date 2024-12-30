import { mutate } from "swr";
import { deleteProfileImage } from "../../../../services/profileImage";
import ConfirmBox from "../../../../components/ConfirmBox/ConfirmBox";
import { StyledDeleteBox } from "../OptionsStyle.styled";


type Props = { setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>> }


export default function DeleteProfileImagePrompt({ setModalIsOpen }: Props) {


    const handleDelete = () => {
        deleteProfileImage();
        mutate('/auth/user');
        setModalIsOpen(false);
    }

    const handleCancel = () => {
        setModalIsOpen(false);
    }

    const confirmProps = {
        rejectButton: { InnerNode: "ביטול", onClick: handleCancel, disabled: false },
        confirmButton: { InnerNode: "מחיקה", onClick: handleDelete, disabled: false },
        closeModal: () => setModalIsOpen(false)

    }




    return (
        <>
            <ConfirmBox {...confirmProps}>
                <StyledDeleteBox>
                    <p className="title">מחיקת תמונה</p>
                    <p>בטוחים שאתם רוצים למחוק את התמונה?</p>

                </StyledDeleteBox>
            </ConfirmBox>
        </>
    );
};
