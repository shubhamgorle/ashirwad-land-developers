const Rdata = require("../models/raulgaonModel");

exports.createData = async(req, res, next)=>{
    const data = await Rdata.create(req.body);
    res.status(201).json({
    success: true,
    data,
});
}

exports.getData = (async(req,res)=>{
    const data = await Rdata.find();
    res.status(200).json({
    success: true,
    data
   });
})


exports.deleteData = (async(req, res)=>{
    const data = await Rdata.findByIdAndDelete(req.params.id);
    res.status(200).json({
    success: true,
    data,
     message: "Data Deleted Successfully"
   });
})

exports.updateData = (async(req, res)=>{
    const data = await Rdata.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
    success: true,
    data,
    message: "Data Updated Successfully"
   });
})
exports.getDetails = (async(req, res)=>{
    const data = await Rdata.findById(req.params.id)
    res.status(200).json({
    success: true,
    data,
    message: "Data Updated Successfully"
   });
})