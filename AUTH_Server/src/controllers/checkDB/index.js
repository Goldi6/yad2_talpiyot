const { User } = require("sequelize_models");

const { ERR } = require("messages");
const { setError } = ERR;

async function checkIfEmailAlreadyExists(req, _, next) {
  const { email } = req.body;
  try {
    const user = await User.findByEmail(email);
    if (user !== null) return next(setError("EMAIL_ALREADY_REGISTERED"));
    console.info("\ncheckIfEmailAlreadyExists: email is not registered");
    next();
  } catch (err) {
    console.log("checkIfEmailAlreadyExists ERR: ", err.message);
    next(setError("ERR_NETWORK"));
  }
}

module.exports = { checkIfEmailAlreadyExists };
