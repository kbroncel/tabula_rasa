const db = require("../dbConnection");

const user = db.model("User", {
    username: {type: String, required: true},
    password: {type: String, required: true},
});

module.exports = user;