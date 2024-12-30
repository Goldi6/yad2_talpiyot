import { useEffect, useState } from "react";
import { signal } from "@preact/signals-react";
import { dataURLtoFile } from "./Helper/dataURLtoFile";
import { StyledDropZoneContainer } from "../OptionsStyle.styled";
import { patchUpdateProfileImage } from "../../../../services/profileImage";
import ImageDropzone from "../../../../components/fields/ImageInput/ImageDrop/ImageDropzone";
import ImageCropper from "../../../../components/fields/ImageInput/ImageCropper/ImageCropper";
import ConfirmBox from "../../../../components/ConfirmBox/ConfirmBox";



type Props = { setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>> }




export default function ProfileImageUploadContainer({ setModalIsOpen }: Props) {

    const [file, setFile] = useState<File | null>(null);
    const [showReader, setShowReader] = useState<boolean>(true);

    const [cropperSrc, setCropperSrc] = useState<string | null>(null);
    // URL.createObjectURL(file)
    const [finalImage, setFinalImage] = useState("");


    //signal:
    const updateClickFired = signal(false);

    const handleCancel = () => {
        console.log('cancel')
        setFile(null);
        setModalIsOpen(false);
    };

    //this click updates a signal that sets the final image
    const handleUpdate = () => { updateClickFired.value = true; }

    // setup cropper
    useEffect(() => {
        if (file) {
            const fileTypes = ["image/jpeg", "image/png", "image/jpg"];

            if (!fileTypes.includes(file.type)) {
                setFile(() => null);
                return;
            }

            setShowReader(() => false);
            const reader = new FileReader();
            reader.onload = () => {
                const dataURL = reader.result;
                setCropperSrc(() => dataURL as string);
            };
            reader.readAsDataURL(file);
        } else {
            setShowReader(() => true);
            setCropperSrc(null);
            setFinalImage("")
        }

    }, [file])

    //when finalImage is set, send it to the server and close the modal
    useEffect(() => {
        //TODO: remove the final image...
        if (finalImage) {
            console.log("finalImage", finalImage)

            const croppedFile = dataURLtoFile(finalImage, "userProfileImage");
            if (!croppedFile) return;
            //TODO: set ERROR!!!
            patchUpdateProfileImage(croppedFile);

            setFile(() => null);
            setFinalImage(() => "");
            setModalIsOpen(() => false);
        }



    }, [finalImage, setModalIsOpen])


    const confirmProps = {
        rejectButton: {
            InnerNode: "ביטול",
            onClick: handleCancel,
            disabled: false
        },
        confirmButton: {
            InnerNode: "עדכון",
            onClick: handleUpdate,
            disabled: file ? false : true
        },
        closeModal: () => setModalIsOpen(false)
    }

    return (
        <>
            <ConfirmBox {...confirmProps}>
                <StyledDropZoneContainer>
                    <p className="title">בחירת תמונה חדשה</p>
                    {showReader && <div className='dropzone'>
                        <ImageDropzone state={[file, setFile]} placeholderText={"גרירה או לחיצה להעלאת תמונות"} />
                    </div>}
                    {!showReader && cropperSrc &&
                        <div className='cropper'>
                            <ImageCropper clickFired={updateClickFired} setFinalImage={setFinalImage} fileSrc={cropperSrc} />
                        </div>
                    }

                </StyledDropZoneContainer>
            </ConfirmBox>
        </>
    );
};
