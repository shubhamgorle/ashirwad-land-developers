const {createData, getData, deleteData, updateData, getDetails} = require("../controllers/newDataController")
// const getData = require("../controllers/newDataController")
const express = require("express")
const router = express.Router();

router.route("/new").post(createData)
router.route("/get").get(getData)
router.route("/remove/:id").delete(deleteData)
router.route("/update/:id").put(updateData)
router.route("/details/:id").get(getDetails)

module.exports = router;