const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const app = express ();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

// log requests
app.use(morgan('tiny'));

//parse requests for body
app.use(bodyparser.urlencoded({ extended : true }))

//set engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views"))

//loading assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

//loading router
app.use('/', require('./server/routes/router'))

app.listen(3000, ()=> {console.log('Server is running on http://localhost:3000')});

