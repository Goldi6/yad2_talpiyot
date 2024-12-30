const sequelize = require("./src/connect");
const User = require("./src/Models/User");

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.log("Unable to connect to the database:", error);
  }
};



async function matchModelsWithDatabases() {

  // - This checks what is the current state of the table in the database 
  // (which columns it has, what are their data types, etc), 
  // and then performs the necessary changes in the table to make it match the model.

  await User.sync({ alter: true })
}

async function createDatabase() {
  User.sync()
  //This creates the table if it doesn't exist (and does nothing if it already exists)

}

async function dropAndRecreateModelsInDatabase() {
  User.sync({ force: true })
  // This creates the table, dropping it first if it already existed

}


//IMPORTANT: uncomment the function you want to run when setting up/rewriting the database 

testConnection();

matchModelsWithDatabases();
// createDatabase();
// dropAndRecreateModelsInDatabase();


// User.hasOne(UserDetails, {
//   onDelete: "SET NULL", //NOTE: CASCADE??
//   // onUpdate: 'RESTRICT'
// });

module.exports = { sequelize, User };
