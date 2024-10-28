const {createData, getData, deleteData, updateData, getDetails} = require("../controllers/rDataController")
// const getData = require("../controllers/newDataController")
const express = require("express")
const rrouter = express.Router();

rrouter.route("/new").post(createData)
rrouter.route("/get").get(getData)
rrouter.route("/remove/:id").delete(deleteData)
rrouter.route("/update/:id").put(updateData)
rrouter.route("/details/:id").get(getDetails)

module.exports = rrouter;