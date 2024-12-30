const { User } = require("sequelize_models");
const bcrypt = require("bcrypt");

const { ERR } = require("messages");
const { setError } = ERR;

async function addUserToDB(req, _, next) {
  try {
    await User.addNewUser({
      email: req.session.email,
      password: req.session.password, name: req.body.name,
      surname: req.body.surname, phone: req.body.phone
    });
    console.log("New user added to DB");
    next();
  } catch (error) {
    console.log("Error adding new user in sequelize : ", error);
    next(setError("ERR_NETWORK"));
  }
}

async function verifyLogin(req, _, next) {

  const { email, password } = req.body;

  try {
    const user = await User.findByEmail(email);

    if (!user) {
      throw setError("USER_DOESNT_EXIST");
    }
    console.info("\n\nComparing passwords : ");
    let plainUser = user.get({ plain: true });
    console.log("plainUser : ", plainUser);
    const match = await bcrypt.compare(password, plainUser.password);
    if (!match) {
      throw setError("WRONG_LOGIN_CREDENTIALS");
    }
    console.log("Password match")
    delete plainUser.password;
    console.log("user : ", plainUser);
    req.body.user = plainUser;
    next();
  } catch (error) {
    console.log("Error logging in user  : ", error);
    next(error);
  }
}

module.exports = { addUserToDB, verifyLogin };
