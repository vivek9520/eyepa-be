const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

dotenv.config();

app.use(cors());

const carouselRouter = require("./router/carouselRouter");

app.use(carouselRouter);

app.listen(process.env.PORT, () => {
  console.log(`server is running port ${process.env.PORT}`);
});

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.irlro.mongodb.net/newdb?retryWrites=true&w=majority",
  () => {
    console.log("db connected");
  }
);
