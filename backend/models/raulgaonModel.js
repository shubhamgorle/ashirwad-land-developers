const mongoose = require("mongoose");
const newDataSchema = new mongoose.Schema({
    account: {
        type: String,
        required: [true, "Please Enter A/c"],
        trim: true
    },
    name: {
        type: String,
        required: [true, "Please Enter Name"]
    },
    description: {
        type: String,
        required: [true, "Please Enter Description"]
    }, 
    money: {
        type: Number,
        required: [true, "Please Enter Money"]
    }, 
    mode: {
        type: String,
        required: [true, "Please Enter mode"]
    },
    date: {
        type : String
    }
})

module.exports = mongoose.model("rdata", newDataSchema, "rdatas");
