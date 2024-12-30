export function dataURLtoFile(dataURL: string, fileName: string) {
    const arr = dataURL.split(',');
    const mime_ = arr[0].match(/:(.*?);/);
    if (!mime_ || !mime_[1]) return false;


    const mime = mime_[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], fileName, { type: mime });

}


