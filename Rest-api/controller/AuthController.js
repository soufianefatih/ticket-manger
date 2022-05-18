const { User } = require("../model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const dotenv = require("dotenv");
dotenv.config();

exports.register = async (req, res) => {
  let data = req.body;
  res.json({ data: data });
  const newUser = await User.create({
    name: data.name,
    email: data.email,
    password: bcrypt.hashSync(data.password, 8),
  });
  try {
    res.json(newUser);
  } catch (err) {
    res.status(400).send("bad request");
  }
};


exports.login = async (req, res) => {
    await User.findOne({
       where: {
         email: req.body.email,
       },
     })
       .then((user) => {
         if (!user) {
           return res.status(404).send({ message: "User Not found." });
         }
         let Comparepassword = bcrypt.compareSync(
           req.body.password,
           user.password
         );
         if (!Comparepassword) {
           return res.status(401).send({
             message: "Password Not Correct!",
           });
         }
         var token = jwt.sign({ id: user.id, name: user.name, email: user.email}, process.env.TOKEN_SECRET, {
           expiresIn: 90000,
         });
   
         return res.status(200).send({
           user,
           token
         });
         
       })
       .catch((err) => {
         res.status(500).send({ message: err.message });
       });
   };
