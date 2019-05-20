

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;

// Requiring the models
const location = require('./models/location.js');
const home = require('./models/home.js');



// Connect mongodb to the server and create a database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/airbnbV7', { useNewUrlParser: true })
    .catch((err) => {console.log(err);}
);

    
// Array storing the houses

    
    const place = new location({
        name : "Rome",
        houses: []
    });

    // if(process.env.PORT) {

        // const houses = [{title: "ASA DELTA · RIO DE JANEIRO", subtitle: "Asa Delta Voo de Instrução no Rio de Janeiro", price: "€118 por pessoa", rating: "4.98", image: "https://a0.muscache.com/im/pictures/5fdda7ec-fa46-4818-8f7c-e13b3228cd45.jpg?aki_policy=large"}, {title: "ASA DELTA · MACAU", subtitle: "Asa Delta Voo de Instrução no Rio de Janeiro", price: "€118 por pessoa", rating: "4.98", image: "https://a0.muscache.com/im/pictures/5fdda7ec-fa46-4818-8f7c-e13b3228cd45.jpg?aki_policy=large"}, {title: "ASA DELTA · LISBON", subtitle: "Asa Delta Voo de Instrução no Rio de Janeiro", price: "€118 por pessoa", rating: "4.98", image: "https://a0.muscache.com/im/pictures/5fdda7ec-fa46-4818-8f7c-e13b3228cd45.jpg?aki_policy=large"}, {title: "ASA DELTA · ITALIA", subtitle: "Asa Delta Voo de Instrução no Rio de Janeiro", price: "€118 por pessoa", rating: "4.98", image: "https://a0.muscache.com/im/pictures/5fdda7ec-fa46-4818-8f7c-e13b3228cd45.jpg?aki_policy=large"}]

        // place.save();
    // }
    

    
// Set ejs has the view engine
app.set("view engine", "ejs");

// Serving static files
app.use("/public", express.static("public"));

// Parse the bodies of all incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Starting the server on the port defined
app.listen(port, function () {
    console.log(`Server started on port: ${port}`);
});




// Route that renders the homepage
app.get("/", function (req, res) {

    res.render("homepage", {style_name: "homepage"});
});



// Route that renders the houses if you submit the initial form
app.get("/s/:location/all", function (req, res) {

    location.findOne({name: req.params.location})
        .then(result => {
            if(req.params.location === "Rome") {
                res.render("city", {city: req.params.location, houses: result.houses, style_name: "city"})
            } else {
                res.send("We found no results for that query")
            }})
        .catch(err => console.log(err));
});



// Route that is redirected after creating a new home
app.get("/s/:location/homes", function (req, res) {
    
    location.findOne({name: req.params.location})
        .populate("houses")
        .then(result => {
            if(req.params.location === "Rome") {
                res.render("homes", {city: req.params.location, houses: result.houses, style_name: "city"});
            } else {
                res.send("We found no results for that query")
            }})
        .catch(err => console.log(err));
});



// Route that is used to create a new home
app.get("/:location/homes/new", function (req, res) {
    
    res.render("new_home", {style_name: "new_home", location: req.params.location});
});



// Route to send the data in the form
app.post("/:location/homes", function (req, res) {

    location.findOne({name: req.params.location})
        .then(result => {

            const newHouse = new home ({

                title: req.body.title,
                subtitle: req.body.subtitle,
                price: req.body.price,
                rating: "4.98",
                image: req.body.image
            })   
            
            

            newHouse.save();
            result.houses.push(newHouse._id);
            result.save();

            res.redirect(`/s/${req.params.location}/homes`);
        })
        .catch(err => console.log(err));   
});