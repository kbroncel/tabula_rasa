const axios = require("axios");

axios.get("https://swapi.co/api/people/1").then(function(response){
    document.querySelector(".container").innerHTML = JSON.stringify(response.data);
})