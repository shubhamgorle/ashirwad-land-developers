const mongoose = require("mongoose");
// process.env.DB_URI 
const connectDatabase = async() => {
   await mongoose.connect("mongodb://localhost:27017/layout").then(() => {
        console.log(`mongodb connected with server`);
    }).catch((error) => {
        console.log(error)
    })
}
module.exports = connectDatabase;
// abc