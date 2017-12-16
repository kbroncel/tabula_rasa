const express = require("express"),
    bodyParser = require("body-parser"),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//cors for port 3000
function allowCrossDomain(request, response, next){
response.header("Access-Control-Allow-Origin", "http://localhost:3000");
response.header("Access-Control-Allow-Credentials", "true");
response.header("Access-Control-Allow-Methods", "GET,PUT,POST");
response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
}

app.use(allowCrossDomain);
// app.use(require("./controllers/static"));
app.use(require("./controllers/getData"));
app.use(require("./controllers/test"));

app.listen(8080, function(){
console.log("I am listening!!!! (8080)");
})