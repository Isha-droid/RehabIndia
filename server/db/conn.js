const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();

const client = mongoose
  .connect(
"mongodb+srv://ishamahajan:ishamahajan@cluster0.if36jgo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log("Error: ", error);

    return error;
  });

module.exports = client;
