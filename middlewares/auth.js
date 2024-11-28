const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../utils/config');

const authMiddleware = {
    checkAuth: async (req, res, next) => {
        try {
            const token = jwt.verify(req.cookies.token, config.SECRET_KEY);

            // set the verified tokend id in requested userId
            req.userId = await token.userId;

            next();
        } catch(error){
            res.status(500).json({
                message:error.message
            });
        }
    }
}

module.exports = authMiddleware;