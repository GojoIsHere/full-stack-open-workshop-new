const express = require("express");
const cors = require("cors");
const app = express();
const userControllers = require("./controllers/users");
const patientControllers = require("./controllers/patients");

const { errorHandler, unknownEndpoint } = require("./utils/middleware");
const mongoose = require("mongoose");
const { url } = require("./utils/config");
mongoose.set("strictQuery", false);
mongoose.connect(url);
app.use(express.json());
app.use(cors());
app.use("/api/user", userControllers);
app.use("/api/patient", patientControllers);

app.use(unknownEndpoint);
app.use(errorHandler);
module.exports = app;
