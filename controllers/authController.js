const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const user = await User.create({
    username: req.body.username,
    password: hashedPassword,
  });

  res.json(user);
};

exports.login = async (req, res) => {

  const user = await User.findOne({
    where: { username: req.body.username },
  });

  if (!user) return res.json({ message: "User not found" });

  const valid = await bcrypt.compare(req.body.password, user.password);

  if (!valid) return res.json({ message: "Invalid password" });

  const token = jwt.sign({ id: user.id }, "secretkey");

  res.json({ token });

};