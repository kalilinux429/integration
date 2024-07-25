const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    //mongo db connected
    console.log("Mongodb connected")
  )
  .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use("/api/users", userRoutes);
//only api extention is given
app.listen(PORT, () => {
  console.log(`server is running of port ${PORT}`);
});
