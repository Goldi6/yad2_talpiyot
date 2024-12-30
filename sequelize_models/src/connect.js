const { Sequelize } = require("sequelize");


const dbName = process.env.POSTGRES_BD || "yad2";
const dbUser = process.env.POSTGRES_USER || "postgres";
const dbPassword = process.env.POSTGRES_PASSWORD || "tour secret password";

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: "localhost",
  dialect: "postgres",
});



module.exports = sequelize;
