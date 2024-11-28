// import mongoose
const mongoose = require('mongoose');
const app = require('./app');
const config = require('./utils/config')
require('dotenv').config();

// connect to database
mongoose.connect(config.MONGODB_URI)
    .then(() =>{
        console.log("Connected to database")

        // listen for requests
        app.listen(3001, () => {
            console.log(`server is running @ http://localhost:3001`);
        })
    }).catch((error) => {
        console.log("Connection failed");
        console.log("Error:", error)
            ;
    })

