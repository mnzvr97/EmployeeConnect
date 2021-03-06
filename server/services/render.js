const axios = require('axios');
const { response } = require('express');

exports.homeRoutes = (req, res) => {

    axios.get('https://fast-sea-48182.herokuapp.com/api/users')
        .then(function(response){
            res.render('index', {users : response.data});
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.add_user = (req, res) => {
    res.render('add_user');
}

exports.update_user = (req, res) => {
    axios.get('https://fast-sea-48182.herokuapp.com/api/users', { params : { id : req.query.id}})
        .then(function(userdata){
            console.log(userdata.data)
            res.render("update_user", {user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}