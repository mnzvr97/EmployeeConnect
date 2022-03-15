const mongoose = require('mongoose')

const connectDB = async () => {
    try{
      const con =  mongoose.connect('MONGO_URI', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log('MongoDB connected : ${con.connection.host}');
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB

// mongoose.connect("mongodb://localhost:27017/employeeControl", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }, () => {
//     console.log("mongodb connected successfully!");
// });"mongodb+srv://mnzvr:mnzvr1997@cluster0.ebkpj.mongodb.net/employeecontrol?retryWrites=true&w=majority"