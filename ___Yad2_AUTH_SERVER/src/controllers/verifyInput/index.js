const { ERR } = require("messages");
const { verifyEmailFormat, verifyPasswordFormat } = require("./verifyFormat");
const { isAtLeast18YearsOld } = require("./verifyAge");
const validateEmailDomain = require("./validateEmailDomain");
// ------SET ERROR-----
const { setError } = ERR;

function requiredFieldsExists(requiredFields) {
  return function (req, _, next) {
    if (!req.body) return next(setError("MISSING_REQUEST_BODY"));
    if (requiredFields.includes("email") && !req.body.email) {
      return next(setError("MISSING_EMAIL"));
    }
    if (requiredFields.includes("password") && !req.body.password) {
      return next(setError("MISSING_PASSWORD"));
    }

    next();
  };
}

// ------VERIFY INPUT MIDDLEWARE-----
async function verifyRegistrationInput(req, _, next) {
  const { email, password } = req.body;

  if (!verifyEmailFormat(email)) {
    return next(setError("INVALID_EMAIL_FORMAT"));
  }
  if (!verifyPasswordFormat(password)) {
    return next(setError("INVALID_PASSWORD_FORMAT"));
  }

  if (password.length < 8 || password.length > 20) {
    return next(setError("INVALID_PASSWORD_FORMAT_LENGTH"));
  }

  if (!(await validateEmailDomain(email))) {
    return next(setError("INVALID_EMAIL_DOMAIN"));
  }

  next();
}
// ------LOGIN-----

async function verifyLoginInput(req, _, next) {
  const { email, password } = req.body;

  if (
    !verifyEmailFormat(email) ||
    !verifyPasswordFormat(password) ||
    password.length < 8 ||
    password.length > 20 ||
    !(await validateEmailDomain(email))
  )
    return next(setError("WRONG_LOGIN_CREDENTIALS"));

  next();
}

function verifyProfileUpdate(req, _, next) {
  const { birthday } = req.body;

  if (birthday && !isAtLeast18YearsOld(birthday)) {
    return next(setError("MIN_AGE", formatDate(minDate)));
  }
  // if (name && !_(email)) {
  //   return next(setError("INVALID_NAME_FORMAT"));
  // }
  // if (surname && !verifyPasswordFormat(password)) {
  //   return next(setError("INVALID_SURNAME_FORMAT"));
  // }

  // if (city && (password.length < 8 || password.length > 20)) {
  //   return next(setError("INVALID_PASSWORD_FORMAT_LENGTH"));
  // }

  // if (email && !validateEmailDomain(email)) {
  //   return next(setError("INVALID_EMAIL_DOMAIN"));
  // }

  next();
}

module.exports = {
  requiredFieldsExists,
  verifyRegistrationInput,
  verifyLoginInput,
  verifyProfileUpdate,
};
