const { User } = require("../model");
// const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const dotenv = require("dotenv");
dotenv.config();

exports.register = async (req, res) => {
  let data = req.body;
  const newUser = await User.create({
    name: data.name,
    email: data.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  try {
    res.json(newUser);
  } catch (err) {
    res.status(400).send("bad request");
  }
};