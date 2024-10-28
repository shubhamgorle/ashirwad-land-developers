const app = require("./app.js");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database.js")
dotenv.config({path:"../backend/config/config.env"});

connectDatabase()
const server = app.listen(process.env.PORT, ()=>{
    console.log(`server is working on port with port ${process.env.PORT}`)
})