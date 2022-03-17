const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
// const mongoose = require('mongoose')
const connectDB = require('./server/database/connection')

const app = express ();

dotenv.config()
const PORT = process.env.PORT || 3000

// log requests
app.use(morgan('tiny'));

// mongo connect
connectDB();

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

app.listen(3000, ()=> {console.log(`Server is running on http://localhost:${PORT}`)});

// mongoose.connect("mongodb://localhost:27017/employeeControl", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }, () => {
//     console.log("mongodb connected successfully!");
// });