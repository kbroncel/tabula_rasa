//static file serving
const express = require("express"),
router = express.Router(),
path = require("path");

router.use(express.static(__dirname))
router.get("/", function(req, res){
res.sendFile(path.resolve("./index.html"));
})

module.exports = router;