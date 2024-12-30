import { StyledConfirmButtons } from "./ConfirmButtons.styled";



export type ButtonProps = {
    InnerNode: React.ReactNode | string;
    onClick: () => void;
    disabled?: boolean;

}

export type ConfirmButtonsProps = {
    rejectButton: ButtonProps;
    confirmButton: ButtonProps;
};


export const ConfirmButtons = ({ rejectButton, confirmButton }: ConfirmButtonsProps) => {
    return (
        <>
            <StyledConfirmButtons>
                <button onClick={rejectButton.onClick} className='btn-gray-border' disabled={rejectButton.disabled}>{rejectButton.InnerNode}</button>
                <button onClick={confirmButton.onClick} className='btn-orange ' disabled={confirmButton.disabled}>{confirmButton.InnerNode}</button>
            </StyledConfirmButtons>
        </>
    );
};