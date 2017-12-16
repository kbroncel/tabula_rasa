const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const promise = mongoose.connect("mongodb://admin:admin@ds139436.mlab.com:39436/tabula", {
    useMongoClient: true,
  });

promise.then(function(){
    console.log("Connected!");
})

module.exports = mongoose;