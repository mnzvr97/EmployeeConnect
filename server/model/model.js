const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    employeeid : {
        type : String,
        required : true,
        unique : true
    },
    salary : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    gender : String,
    status : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb