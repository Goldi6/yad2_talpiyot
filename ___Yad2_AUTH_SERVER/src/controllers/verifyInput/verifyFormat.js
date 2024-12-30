// ------VERIFY EMAIL FORMAT-----

function verifyEmailFormat(email) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
}

// ------VERIFY PASSWORD FORMAT-----

function verifyPasswordFormat(password) {
  //const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,20}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).*/;
  return passwordRegex.test(password);
}

module.exports = { verifyEmailFormat, verifyPasswordFormat };
