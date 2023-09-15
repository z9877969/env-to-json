const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const router = require("./router");

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(express.json());
// app.use(cors());
app.use("/env", router);

module.exports = app;
