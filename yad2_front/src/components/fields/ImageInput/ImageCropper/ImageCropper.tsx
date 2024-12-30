import { useEffect, useRef } from "react";
import "cropperjs/dist/cropper.css";


import { Cropper, ReactCropperElement } from "react-cropper";
import { Signal } from "@preact/signals-react";

type Props = {
    fileSrc: string;
    setFinalImage: React.Dispatch<React.SetStateAction<string>>;
    clickFired: Signal<boolean>;
}
export default function ImageCropper({ clickFired, fileSrc, setFinalImage }: Props) {

    const cropperRef = useRef<ReactCropperElement>(null);


    useEffect(() => {
        if (clickFired.value && cropperRef.current && fileSrc) {
            const croppedCanvas = cropperRef.current.cropper.getCroppedCanvas();
            if (croppedCanvas) {
                const croppedImage = croppedCanvas.toDataURL();

                setFinalImage(croppedImage);
                // console.log("This is the Cropped Image", croppedImage);
                clickFired.value = false;
            }
        }
    }, [clickFired, clickFired.value, fileSrc, setFinalImage]);


    return (
        <>
            <Cropper
                ref={cropperRef}

                src={fileSrc}
                style={{ height: '100%', width: '100%' }}
                aspectRatio={1 / 1}
                zoomable={true}

            />
        </>
    );
}
