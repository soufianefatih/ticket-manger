const express = require('express');
const app = express ();
const bodyParser = require("body-parser");
const cors = require('cors')
require('./model/index');

app.use(cors())

app.use("/upload", express.static("./upload"));

  //* the will let us get data the data form post
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());


// * connection database 

const db = require('./config/database')

db
    .authenticate()
    .then(() => {
        console.log('Connection successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

    //* Require Routes
    const authRoutes = require("./route/auth");

    //* Register Our Routes
  app.use("/api/ticketmanger/", authRoutes);
  

  //* the will let us get data the data form post
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

const PORT = process.env.PORT || 5500;

app.listen(PORT,()=>{
console.log(`Server is running on port ${PORT}`);
});
