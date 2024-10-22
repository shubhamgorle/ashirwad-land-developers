const NewData = require("../models/newDataModel");

exports.createData = async(req, res, next)=>{
    const data = await NewData.create(req.body);
    res.status(201).json({
    success: true,
    data,
});
}

exports.getData = (async(req,res)=>{
    const data = await NewData.find();
    console.log(data)
    res.status(200).json({
    success: true,
    data
   });
})