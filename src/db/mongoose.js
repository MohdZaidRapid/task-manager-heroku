const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  process.env.MONGO_DB_URI,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongo db connected");
  }
);
