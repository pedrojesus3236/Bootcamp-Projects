

// Requiring packages and determining constants
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const app = express();
const port = 3000;

// Serving static files
app.use(express.static("public"));

// Parse the bodies of all incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Starting the server on the port defined
app.listen(port, function () {
    console.log(`Server started on port: ${port}`);
});

app.post("/", function (req, res) {

    console.log(req.body)

    const subscriber = JSON.stringify({
        merge_fields: {
            FNAME: req.body.name,
        },
        email_address: req.body.email,
        status: "subscribed"
    })

    const options = {
        method: "POST",
        headers: 
        {
            Authorization: "apikey 4b4263df2fedeea28060831de583b19a-us20",
            "Content-Type": "application/json"
        },
        body: subscriber
    }
    console.log("hehhlo")
    fetch("https://us20.api.mailchimp.com/3.0/lists/870c1dd976/members", options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error(err));
})

app.get("/", function (req, res) {

    res.sendFile(__dirname + "/index.html");
});