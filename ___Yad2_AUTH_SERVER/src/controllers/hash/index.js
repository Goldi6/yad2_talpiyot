const bcrypt = require("bcrypt");

async function hashPassword(req, _, next) {
  const { password } = req.body;
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  req.body.password = hashedPassword;
  console.log("\nhashedPassword: ", hashedPassword)
  next();
}

module.exports = { hashPassword };
