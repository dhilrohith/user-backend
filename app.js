// import express
const express = require('express');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/authRoutes');

// creates app
const app = express();

// add middleware to parse JSON
app.use(express.json());

app.use(cookieParser());

// define root route
app.use('/api/v1/auth', authRouter);

// export app
module.exports = app