const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email:{
    type: String,
    required: true,
    unique: true
  },
  firstName:{
    type: String,
    required: true,
  },
  lastName:{
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true,
    minlength: 6
  }
})

const UserLogin = mongoose.model("UserLogin", userSchema);
module.exports = UserLogin;