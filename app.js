// import express
const express = require('express');

// creates app
const app = express();

// define root route
app.get("/", (request, response)=>{
    response.json({
        message:"Hello World!"
    });
});

// export app
module.exports = app;