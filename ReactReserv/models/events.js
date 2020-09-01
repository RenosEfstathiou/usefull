const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema =  new Schema({
    title:  {
        type: String,
        required: true
    },

    description: {
        type: String,
        required:true
    },

    price: {
        type: Number,
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

});

// here we create a model of our  events  1rs arg =  name of the model and 
//  the 2nd arg = a pointer of the schema 
// because we want to use this model from other files app for example we want to export it 
//  as a module
module.exports = mongoose.model('Event',eventSchema );