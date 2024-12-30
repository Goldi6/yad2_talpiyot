


const { generateUploadURL, deleteImageFromBucket } = require("s3_methods");



const getProfileImageSignedURL_s3 = async (req, res, next) => {


    const user = req.body.user;
    const imageKey = "profile_image/" + user.profile_image_key + "?timestamp=" + Date.now();
    try {
        const uploadURL = await generateUploadURL(imageKey);
        console.log("uploadURL: ", uploadURL);

        res.status(200).json({ url: uploadURL });
    } catch (error) {
        //TODO: handle error
        next(error);
    }

};


const deleteProfileImageFromS3 = async (req, res, next) => {

    const imageUrl = req.body.user.profile_image;

    const imageName = "profile_image/" + imageUrl.split("/").pop();

    try {
        const deleted = await deleteImageFromBucket(imageName);
        console.log("deleted: ", deleted);
        next();

    } catch (error) {

        next(error);
    }


}

module.exports = { getProfileImageSignedURL_s3, deleteProfileImageFromS3 };