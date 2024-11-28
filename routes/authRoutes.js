// import express to create route
const express = require('express');
const auth = require('../middlewares/auth');
const authController = require('../controllers/authController');

// create auth router
const authRouter = express.Router();

// define endPoints
authRouter.get('/', authController.allUsers)
authRouter.post('/register',authController.register);
authRouter.post('/login',authController.login)
authRouter.post('/logout',authController.logout)
authRouter.get('/me', auth.checkAuth, authController.me)
// export
module.exports = authRouter ; 