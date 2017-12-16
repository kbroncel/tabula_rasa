const express = require("express"),
router = express.Router();


router.get("/api/test", function(request, response, next){
    return response.json({
        "test": true
    });
});

module.exports = router;