// import mongoose from "mongoose";

// async function connectToMongoDB() {
//   try {
//     await mongoose.connect("mongodb://localhost:27017/Book_review");
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error.message);
//   }
// }

// connectToMongoDB();


var mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/Book_review");

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {

  // we're connected!

  console.log("We are connected")
});




