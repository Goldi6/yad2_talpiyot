const express = require("express");

const router = express.Router();

//MIDDLEWARE
const {
  requiredFieldsExists,
  verifyRegistrationInput,
} = require("../controllers/verifyInput");

const { checkIfEmailAlreadyExists } = require("../controllers/checkDB");
const {
  createAndStoreVerificationCode,
  updateAndStoreVerificationCode,
  verifyEmailCode,
  deleteEmailVerificationCodeList,
} = require("../controllers/redisActions");
const { hashPassword } = require("../controllers/hash");

const { addUserToDB } = require("../controllers/Database");

//==============!!! NOT IMPLEMENTED !!!=========
//NOTE: instead of sending email and expecting a code back, we will send the code in the response body!
//ERROR: Remove this option from back and front when email service is implemented!!!!
const sendEmailWithVerificationCode = (req, _, next) => {
  const { email, verificationCode } = req.body;
  console.log(
    "-------( NOT )Sending email with verification code: ",
    verificationCode,
    email
  );
  next();
};

// ---------Register route---------



// ---------send email Register code route---------

router.post(
  "/auth/register/send-email-code",
  requiredFieldsExists(["email", "password"]),
  verifyRegistrationInput,
  checkIfEmailAlreadyExists,
  hashPassword,
  (req, res, next) => {
    req.session.email = req.body.email;
    req.session.password = req.body.password;
    console.log("\nreq.session: ", req.session)
    next()
  },
  createAndStoreVerificationCode,
  sendEmailWithVerificationCode,
  (req, res, next) => {
    const { verificationCode } = req.body;
    try {
      //ERROR: remove verificationCode from response when email service is implemented!
      res
        .status(200)
        .json({ msg: "success", code: verificationCode.toString() });
    } catch (error) {
      next(error);
    }
  }
);

// ---------Resend email Register code---------
router.post(
  "/auth/register/resend-email-code",
  updateAndStoreVerificationCode,
  sendEmailWithVerificationCode,
  (req, res, next) => {
    const { verificationCode } = req.body;
    try {
      //ERROR: remove verificationCode from response when email service is implemented!
      res
        .status(200)
        .json({ msg: "success", code: verificationCode.toString() });
    } catch (error) {
      next(error);
    }
  }
);

//------------Verify email Register code------------

router.post(
  "/auth/register/submit-email-code",
  requiredFieldsExists(["code"]),
  verifyEmailCode,
  (req, res, next) => {
    try {
      console.log("\nEmail verified\n");
      res.status(200).json({ msg: "success" });
    } catch (error) {
      next(error);
    }
  }
);

//------------Add user to DB------------

router.post(
  "/auth/register/complete-registration",
  requiredFieldsExists(["name", "surname", "phone"]),
  deleteEmailVerificationCodeList,
  addUserToDB,
  (_, res, next) => {
    try {
      console.log("\nDone registration\n");
      res.status(200).json({ msg: "success" });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
