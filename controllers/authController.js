// import user model
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../utils/config')

// create an object auth controller to controll routes
const authController = {

    // get all the registered user
    allUsers: async (request, response)=>{
        try{
            const users = await User.find();
        
            response.json({users});
        } catch(error){
            response.json({
                message:error.message
            });``
        }
    },

    // register auth controller
    register: async (request, response)=>{
        try{
            // extract the details(name,email,password) from the request body
            const{name,email,password} =  request.body;

            // find if the user is already registered
            const userExists = await User.findOne({email:email});

            // if user exists return error message
            if(userExists){
                return response.status(400).json({
                    message:"User already exists!"
                })
            }
            // set the first user as a admin
            const users = await User.find();
            const role =  users.length === 0 ? "admin" : "user" ;

            // hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // create new user object
            const newUser = new User({
                name,
                email,
                password:hashedPassword,
                role
            });

            // save newUser in database 
            await newUser.save();

            // return success message
            response.status(201).json({
                message:"New user created sucessfully"
            });

        } catch(error){
            response.status(500).json({
                error:error.message
            });
        }
    },

    // login auth controller
    login: async (request, response)=>{
        try{
            const {email, password} = request.body;

            // check user exists
            const user = await User.findOne({email});

            // not exist return not found message
            if(!user){
                response.status(400).json({
                    message:"Email id is invalid!"
                });
            }

            // password validation
            const passwordIsValid = bcrypt.compare(password, user.password);

            // If password is not valid return not valid message
            if(!passwordIsValid){
                response.status(400).json({
                    message:"Password is not valid"
                })
            }

            // generate token
            const token =  jwt.sign({userId:user._id}, config.SECRET_KEY);

            // Add the token in the cookies
            response.cookie("token", token, {httpOnly:true});

            return response.status(200).json({
                message:"Logged in successfully"
            });


        } catch(error){

        }
    },

    // logout auth controller
    logout: async (request, response)=>{
        try{
            response.clearCookie('token');

            return response.status(200).json({
                message:"Logged out successfully"
            });
        } catch(error){
            response.status(500).json({
                message:error.message
            });
        }
    },

    // get info using token
    me: async (request, response)=>{
        try{
            const userId = await request.userId;
        
            const user = await User.findById(userId).select(['-password', '-updatedAt', '-createdAt', '-__v'])
            
            return response.json({user});
        } catch(error){
            response.status(500).json({
                message:error.message
            });
        }
    }
}

module.exports = authController