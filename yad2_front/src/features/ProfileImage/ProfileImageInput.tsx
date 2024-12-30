import { useEffect, useRef, useState } from "react";
import AlternativeImage from "./UserImage/AlternativeImage";
import { IconEdit } from "../../components/fields/StyledInputs/Icons";
import { StyledProfileImageContainer, StyledImageContainer } from "./ProfileImageInput.styled"
import ProfileImageOptions from "./ProfileImageSelectionOptions/ProfileImageOptions";
import Modal from "../../components/Modal/Modal";




export default function ProfileImageInput() {

    const [showOptions, setShowOptions] = useState<boolean>(false);
    const ref = useRef<HTMLElement | null>(null);

    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<React.ReactNode>(null);



    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        e.preventDefault();

        setShowOptions(() => true);

    };


    useEffect(() => {

        const handleOutsideClick = (e: MouseEvent) => {
            e.stopPropagation();
            e.preventDefault();
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setShowOptions(false);
                window.removeEventListener("click", handleOutsideClick);

            }

        };

        if (showOptions) {
            window.addEventListener("click", handleOutsideClick);
        } else {
            window.removeEventListener("click", handleOutsideClick);
        }

        return () => {
            window.removeEventListener("click", handleOutsideClick);
        };
    }, [showOptions])

    return (
        <>
            <StyledProfileImageContainer>
                <StyledImageContainer >

                    <AlternativeImage />
                </StyledImageContainer>
                <button onClick={handleButtonClick}>
                    <IconEdit />

                    {showOptions && < ProfileImageOptions setModalContent={setModalContent} setShowModal={setShowModal} optionsRef={ref} />
                    }                </button>
                <Modal isOpen={showModal} setIsOpen={setShowModal} >
                    {modalContent}
                </Modal>
            </StyledProfileImageContainer>


        </>
    );
};
