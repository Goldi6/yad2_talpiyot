const RedisMethods = require("redis_methods");
const { ERR } = require("messages");
const { User } = require("sequelize_models");
const { setError } = ERR;

async function createAndStoreVerificationCode(req, _, next) {
  try {
    const verificationCode = await RedisMethods.storeUserVerification(req.body.email);
    req.body.verificationCode = verificationCode;
    next();
  } catch (error) {
    console.log(error);
    next(setError("ERR_NETWORK"));
  }
}

async function updateAndStoreVerificationCode(req, _, next) {
  try {
    const verificationCode = await RedisMethods.updateUserVerification(req.session.email);
    req.body.verificationCode = verificationCode;
    next();
  } catch (error) {
    console.log(error);
    next(setError("ERR_NETWORK"));
  }
}

async function verifyEmailCode(req, _, next) {
  if (!req.session || !req.session.email)
    throw new Error("verifyEmailCode: missing session data");

  console.log("\nverifyEmailCode with redis: ", req.session.email, req.body.code);
  try {
    const verified = await RedisMethods.verifyCode(req.session.email, req.body.code);
    if (!verified) {
      return next(setError("WRONG_REGISTRATION_CODE"));
    }
    next();
  } catch (error) {
    console.log(error);
    next(setError("ERR_NETWORK"));
  }
}

async function deleteEmailVerificationCodeList(req, _, next) {
  try {
    RedisMethods.deleteUserVerification(req.body.email);

    next();
  } catch (error) {
    console.log(error);
    next(setError("ERR_NETWORK"));
  }
}

async function setUserInRedis(req, _, next) {


  // console.log("\n\n\n\nsetUserInRedis: ", req.body.user);

  try {
    await RedisMethods.setUser(req.body.user);
    // await RedisMethods.setUserLikes(req.body.likes);

    next();
  } catch (error) {
    console.log(error);
    next(setError("ERR_NETWORK"));
  }
}


async function getUserFromRedis(req, _, next) {
  try {
    let user = await RedisMethods.getUser(req.session.userId);
    // const likes = await RedisMethods.getUserLikes(req.session.userId);

    if (!user || !user.id) {

      user = await User.findById(req.session.userId);
      user = user.get({ plain: true });
      delete user.password;
      await RedisMethods.setUser(user);

    }


    req.body.user = user;
    next();
  } catch (error) {
    console.log(error);
    next(setError("ERR_NETWORK"));
  }
}


async function deleteUserFromRedis(req, _, next) {
  try {
    await RedisMethods.deleteUser(req.session.userId);
    next();
  } catch (error) {
    console.log(error);
    next(setError("ERR_NETWORK"));
  }
}


module.exports = {
  createAndStoreVerificationCode,
  updateAndStoreVerificationCode,
  verifyEmailCode,
  deleteEmailVerificationCodeList,
  setUserInRedis,
  getUserFromRedis,
  deleteUserFromRedis
};
