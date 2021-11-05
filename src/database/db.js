const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //for the devs
    const db = await mongoose.connect(process.env.DB, {
      // for the docker production
      // const db = await mongoose.connect("mongodb://mongo:27017/LEADS", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
