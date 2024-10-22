const {createData, getData} = require("../controllers/newDataController")
// const getData = require("../controllers/newDataController")
const express = require("express")
const router = express.Router();

router.route("/new").post(createData)
router.route("/get").get(getData)
// router.route("/ashirwad/mendhepathar/get").get(getData)
// router.post('/ashirwad/mendhepathar/new', async(req, res) => {
//     const data = await NewData.create(req.body);
//     res.status(201).json({
//         success: true,
//         data,
//     });
// });
module.exports = router;