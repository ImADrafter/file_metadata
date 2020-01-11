"use strict";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const rootDirectory = path.resolve();

app.use(cors());
app.use("/public", express.static(rootDirectory + "/public"));

app.get("/", (request, response) => {
  response.sendFile(rootDirectory + "/views/index.html");
});

app.post("/api/fileanalyse", upload.single("upfile"), (request, response) => {
  console.log(request.file);
  const { size, encoding, originalname } = request.file;
  response.json({
    fileSize: size,
    encoding: encoding,
    name: originalname
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Node.js listening ...");
});
