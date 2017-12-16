const express = require("express"),
    app = express(),
    path = require("path");


app.get("/", function(req, res){
    res.sendFile(path.resolve("./index.html"));
})

app.use(express.static('assets/js'))
app.use(express.static('assets/css'))

app.listen(8080, function(){
console.log("I am listening!!!! (8080)");
})