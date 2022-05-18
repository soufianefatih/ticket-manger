const express = require('express');
const app = express ();
const bodyParser = require("body-parser");
const cors = require('cors')
require('./model/index');

app.use(cors())
//  connection database 

app.use("/upload", express.static("./upload"));

const db = require('./config/database')

db
    .authenticate()
    .then(() => {
        console.log('Connection successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

  

  //* the will let us get data the data form post
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());

const PORT = process.env.PORT || 5500;

app.listen(PORT,()=>{
console.log(`Server is running on port ${PORT}`);
});
