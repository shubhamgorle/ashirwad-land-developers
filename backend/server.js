const app = require("./app.js");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database.js")
dotenv.config({path:"backend/config/config.env"});

connectDatabase()
const server = app.listen(4000, ()=>{
    console.log("server is working on port 4000")
})