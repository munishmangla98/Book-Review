const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const cors = require('cors');

app.use(cors({
  origin: "http://localhost:4200"
}));

app.listen(9992, function check(err) {
    if (err)
        console.log("error")
    else
        console.log("started");
});

mongoose.connect("mongodb://localhost:27017/Book_review", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Successfully Connected to DB");
    })
    .catch((error) => {
        console.log("Error Connecting to DB:", error);
    });

app.use(express.json());
