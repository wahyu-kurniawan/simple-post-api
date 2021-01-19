const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv/config");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

const routePost = require("./routes/post");

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (req, res) => {
    console.log("connect to db");
  }
);

app.use("/post", routePost);
app.listen(3000);
