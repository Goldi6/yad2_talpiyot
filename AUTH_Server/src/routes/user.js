const express = require("express");
const router = express.Router();
const { ERR } = require("messages");
const { setError } = ERR;
const { getUserFromRedis, setUserInRedis } = require("../controllers/redisActions");
const { updateProfileImage, deleteProfileImage } = require("../controllers/Database");
const { getProfileImageSignedURL_s3, deleteProfileImageFromS3 } = require("../controllers/s3_actions");

//middleware to check for user session


const AUTH = (req, _, next) => {
    const userId = req.session.userId;
    if (!userId) {
        return next(setError("NOT_AUTHORIZED"));
    }
    console.log("user authenticated!!!");
    next();
};



router.get("/auth/user", AUTH, getUserFromRedis, (req, res, next) => {


    let { username, profile_image } = req.body.user;
    profile_image = profile_image === "" ? null : profile_image;
    res.status(200).json({ username, profile_image });

})



router.get("/auth/user/profile_image", AUTH, getUserFromRedis, getProfileImageSignedURL_s3);

router.patch("/auth/user/profile_image", AUTH, updateProfileImage, setUserInRedis, (_, res) => {

    res.status(200).end();
});
router.delete("/auth/user/profile_image", AUTH, getUserFromRedis, deleteProfileImageFromS3, deleteProfileImage, setUserInRedis, (_, res) => {

    res.status(200).end();
});


module.exports = router;