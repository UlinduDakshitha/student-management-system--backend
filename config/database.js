const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("student_db", "root", "Ulindu@123", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;