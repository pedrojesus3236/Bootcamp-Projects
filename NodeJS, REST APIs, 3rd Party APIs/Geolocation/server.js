


const express = require("express");

const app = express();

const bodyParser = require("body-parser");

const fetch = require("node-fetch");

const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.text());



app.listen(3000, function () {

    console.log(`server started on port: ${port}`);
});


app.get("/", function (req, res) {

    res.sendFile(__dirname + "/public/index.html");
});




app.get("/test", function (req, res) {

    fetch(`https://nominatim.openstreetmap.org/search?q=${req.query.city}&format=json`)
        .then(res => res.json())
        .then(json => res.send({center: [json[0].lat, json[0].lon]}))
        .catch(err => console.error(err));
});