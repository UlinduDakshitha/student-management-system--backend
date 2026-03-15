const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");

const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", studentRoutes);

sequelize.sync().then(() => {

  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });

});