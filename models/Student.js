const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");


const Student = sequelize.define("Student", {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  course: DataTypes.STRING,
});

module.exports = Student;