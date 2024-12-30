const express = require("express");
const router = express.Router();
const { ERR } = require("messages");
const { setError } = ERR;
const { deleteUserFromRedis } = require("../controllers/redisActions");
const {
  requiredFieldsExists,
  verifyLoginInput,
} = require("../controllers/verifyInput");
const { verifyLogin } = require("../controllers/Database");
const { setUserInRedis } = require("../controllers/redisActions");
const { setToken } = require("../controllers/jwt");

router.post(
  "/auth/login",
  (req, _, next) => {
    //check if session already exists (if user already logged in (not supposed to get here) - redirect to home page)
    if (req.session.userId) {
      return next(setError("ALREADY_LOGGED_IN"));
    }
    next();
  },
  requiredFieldsExists(["email", "password"]),
  verifyLoginInput,
  verifyLogin,
  setToken,
  (req, _, next) => {
    req.session.userId = req.body.user.id;
    next();
  },
  //get userLikes
  setUserInRedis,
  (_, res) => {
    console.log("PASSED_LOGIN_VERIFICATION");
    console.log("\nUser logged in \n");

    try {
      res.status(200).json({ msg: "success" });
    } catch (error) {
      next(error);
    }
  }
);


router.get(
  "/auth/logout", async (req, res, next) => {
    console.log("Logging out user: ", req.session.userId);
    const userId = req.session.userId;
    if (!userId) return next(setError("NOT_AUTHORIZED"));
    next();
  }, deleteUserFromRedis,
  (req, res) => {
    req.session.destroy();
    //delete user likes
    //terminate all redis sessions
    console.log("User logged out \n");
    res.status(200).end();
  })




module.exports = router;
