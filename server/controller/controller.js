const { restart } = require('nodemon');
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
        gender : req.body.gender,
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

    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({message : "Cannot find user with id"+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                restart.status(500).send({message: "Error retrieving user with id" + id})
            })
    }else{
        Userdb.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({
                message : err.message || "Some error occured while retrieving information"
            })
        })
    }
}

// update a new user by id
exports.update = (req,res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message : "Updated Data cannot be empry"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, {useFindandModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({message : 'Cannot Update user with ${id}.'})
            }else{
                res.send(data)
            }
        })
         .catch(err =>{
             res.status(500).send({message : "Eroor updating user information"})
         })   
}

//delete user
exports.delete = (req,res)=>{
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({message : 'Cannot delete user with ${id}.'})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message : "Could not delete User with id=" + id
            });
        });
}
