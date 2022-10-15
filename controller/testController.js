const TestData = require("../model/testModel");
const log = require("../utils/logger")

module.exports.getAllDatas = async (req, res) => {
    try{
        const data = await TestData.find();
        res.status(200).json({
            status: "success",
            data
        });
    }
    catch(err){
        log.error(err);
    }
}

module.exports.createData = async (req, res) => {
    try{
        const data = await TestData.create(req.body);
        res.status(201).json({
            status: "success",
            data
        });
    }
    catch(err){
        log.error(err);
    }
}

