const express = require("express")
const app = express();
const dotenv = require("dotenv");
const newDataRoute = require("./routes/newDataRoute.js")

app.use(express.json())
dotenv.config({path:"backend/config/config.env"});
app.use("/ashirwad/mendhepathar", newDataRoute)
module.exports = app;


