"use strict";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const rootDirectory = path.resolve();

app.use(cors());
app.use("/public", express.static(rootDirectory + "/public"));

app.get("/", function(request, response) {
  response.sendFile(rootDirectory + "/views/index.html");
});

app.get("/hello", function(request, response) {
  response.json({ greetings: "Hello, API" });
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Node.js listening ...");
});
