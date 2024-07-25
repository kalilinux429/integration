const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    requird: true,
  },

  email: {
    type: String,
    required: true,
    unique:true
   
  },
  accountNumber: {
    type: Number,
    // required: true,
    unique:true
  
  },
  balance: {
    type: Number,
    default: 0,
  },
  timestamp: {
   
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
