import { ChildrenType } from "../../types/general";
import { ConfirmButtons, ConfirmButtonsProps } from "../ConfirmButtons/ConfirmButtons";
import { CenteredModalContainer } from "./styles.styled";
import { ReactComponent as CloseSvg } from '../../assets/icons/close.svg';



type Props = ConfirmButtonsProps & ChildrenType & {
    closeModal: () => void;
};



export default function ConfirmBox({ closeModal, children, rejectButton, confirmButton }: Props) {



    return (
        <>
            <CenteredModalContainer>
                <button className="close-modal" onClick={closeModal}>

                    <CloseSvg width={36} height={36} />
                </button>

                {children}
                <div>

                    <ConfirmButtons rejectButton={rejectButton} confirmButton={confirmButton} />
                </div>
            </CenteredModalContainer>
        </>
    );
};




