// import sequelize & schemas
const Sequelize = require("sequelize");
const db = require("../config/database");
const UserModel = require("./User");


// Gen Model in database
const User = UserModel(db, Sequelize);


// Create table of model
db.sync({ force: false }).then(() => {
    console.log("Table Created !");
  });
  
  module.exports = {
    User,
  };
  