import Dropzone from "react-dropzone";
import styled from "styled-components";
import addImage from "../../../../assets/icons/media_uploads.svg";





const StyledDropZone = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

border: 2px dashed #ccc;
border-radius: 10px;
background-color: #fff;
p{
    font-size: 14px;
    color: #999;
}

`


type Props = {
    placeholderText: string,
    state: [file: File | null, setFile: React.Dispatch<React.SetStateAction<File | null>>]
}

export default function ImageDropzone({ placeholderText, state }: Props) {


    const [, setFile] = state;
    const onDropHandler = (acceptedFiles: File[]) => {

        setFile(() => acceptedFiles[0]);
    }
    //TODO: allow only images selection
    return (
        <>

            <Dropzone multiple={false} onDrop={onDropHandler}>
                {({ getRootProps, getInputProps }) => (

                    <StyledDropZone {...getRootProps()}>
                        <input accept="image/*" {...getInputProps()} />
                        <img src={addImage} alt="העלאת מדיה" />
                        <p>{placeholderText}</p>
                    </StyledDropZone>

                )}
            </Dropzone>

        </>
    );
};
