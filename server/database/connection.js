const mongoose = require('mongoose')
require('dotenv').config()


       mongoose.connect(process.env.MONG_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
const db = mongoose.connection

db.on('connected', function() {
    console.log(`MongoDB connected : ${db.host}`);
})
        

