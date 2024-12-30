const User = require("./Models/User");

async function regPendingUser(data) {
  const user = User.build(data, { fields: ["email", "password", "username"] });
  try {
    await user.save();
    console.log("User saved successfully: ", user.toJSON());
    return user;
  } catch (error) {
    throw new Error(`Error saving pending_reg_user: ${error.message}`);
  }
}

module.exports = { regPendingUser };
