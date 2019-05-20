


const mongoose = require('mongoose');


const HomeSchema = new mongoose.Schema({

    title: String,
    subtitle: String,
    price: String,
    rating: String,
    image: String  
})


module.exports = mongoose.model('Home', HomeSchema);