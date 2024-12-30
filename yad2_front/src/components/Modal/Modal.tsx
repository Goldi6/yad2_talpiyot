import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom';
import styled from 'styled-components';


export const ModalStyled = styled.div`
z-index: 10;
  &.closed {
    z-index: -100;
    opacity: 0;
  }
  &.open {
    opacity: 1;
  }
  transition: opacity 0.3s ease-in-out;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
`;

type Props = {
    isOpen: boolean, children: React.ReactNode,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ isOpen, children, setIsOpen }: Props) {


    const [classN, setClassN] = useState("");

    function closeModal() {
        if (typeof window != "undefined" && window.document) {
            document.body.style.overflow = "unset";
        }
        setClassN("closed");

    }

    function openModal() {
        if (typeof window != "undefined" && window.document) {
            document.body.style.overflow = "hidden";
        }
        console.log('open!!!')
        setClassN("open");
    }

    const clickModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

        if (e.target === e.currentTarget && isOpen) {
            setIsOpen(false);
            closeModal();
        }

    }

    useEffect(() => {
        if (isOpen) openModal();
        else closeModal();
    }, [isOpen]);


    //NOTE: modal should render in the body element, not in the root element,so we create a portal!
    return (
        createPortal(<ModalStyled onClick={clickModal} className={` ${classN}`}>{children}</ModalStyled>, document.getElementById('overlay-root') as HTMLElement)
    )
}