const mongoose = require("mongoose");

//MONGOURI

const MONGODB_URI = "mongodb://localhost:27017/login-mongo";

//Connection to the database
const InitMongoServer = async() => {
  try{
    await mongoose.connect(MONGODB_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB")
  }catch(error){
    console.error("Error to connect to DB", error)
  }
};

module.exports = InitMongoServer;