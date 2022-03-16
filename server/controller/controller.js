var Userdb = require('../model/model')

// creation of api request
// create & save user

exports.create = (req,res)=>{
    if (!req.body){
        res.status(400).send({message : "Content can not be empty!"})
        return;
    }
    // new user
    const user = new Userdb({
        name : req.body.name,
        employeeid : req.body.employeeid,
        salary : req.body.salary,
        email : req.body.email,
        gender : req.body.status,
        status : req.body.status
    })
    // saving user
    user
    .save(user)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message : err.message || "Some error occured while establishing a create operation"
        });
    });

}

// return a user
exports.find = (req,res)=>{

}

// update a new user by id
exports.update = (req,res)=>{

}

//delete user
exports.delete = (req,res)=>{

}
