const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    employeeid : {
        type : String,
        unique : true
    },
    salary : {
        type : String,
        unique : true
    },
    email : {
        type : String,
        unique : true
    },
    gender : {
        type : String,
    },
    status : {
        type : String,
    }    
    // gender : String,
    // status : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb