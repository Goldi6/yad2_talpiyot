const express = require("express");
const router = express.Router();
const { ERR } = require("messages");
const { setError } = ERR;
const { getUserFromRedis } = require("../controllers/redisActions");

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


    const { username, profile_image } = req.body.user;
    res.status(200).json({ username, profile_image });

})



module.exports = router;