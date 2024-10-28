const mongoose = require("mongoose");
// process.env.DB_URI 
const connectDatabase = async() => {
   await mongoose.connect(process.env.DB_URI).then(() => {
        console.log(`mongodb connected with server ${process.env.DB_URI}`);
    }).catch((error) => {
        console.log(error)
    })
}
module.exports = connectDatabase;
// abc