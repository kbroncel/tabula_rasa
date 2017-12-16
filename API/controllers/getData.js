const express = require("express"),
    router = express.Router(),
    user = require("../models/user");


//getData
router.get("/api/getData", function(request, response, next){
    user.findOne({"username": request.query.username}, "username password" ,function(error, user){
        if (error){
            return response.status(400).send({
                message: error
            });
        }
        else {
            return response.json(user);
        }
    });
});

module.exports = router;