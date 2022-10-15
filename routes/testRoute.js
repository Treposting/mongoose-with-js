const express=require("express");
const { getAllDatas, createData } = require("../controller/testController");

const router = express.Router();


router.get("/", getAllDatas);
router.post("/", createData);

module.exports = router;