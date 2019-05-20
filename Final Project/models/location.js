

const mongoose = require('mongoose');



const LocationSchema  = new mongoose.Schema({
    
    name : String,
    houses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Home"
    }]
});


module.exports = mongoose.model('Location', LocationSchema);