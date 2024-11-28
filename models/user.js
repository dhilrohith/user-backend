// import mongoose to create data
const mongoose = require('mongoose');

// create schema structure
const userSchema = new mongoose.Schema({
    "name":String,
    "email":String,
    "password":String,
    "role":{
        type:String,
        enum:['admin','user', 'manager'],
        default:'user'
    },
    "createdAt":{
        type:Date,
        default:Date.now,
    },
    "updatedAt":{
        type:Date,
        default:Date.now,
    }
})
// create model method and export
module.exports = mongoose.model("User", userSchema, "users");