const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const MovieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
    },
    poster: {
        type: String,
        required: false,
        //'http://image.tmdb.org/t/p/original/7BuH8itoSrLExs2YZSsM01Qk2no.jpg'
    },
    rating: {
        type: Number,
        required: true,
    }
});

module.exports = Movie = mongoose.model('movie', MovieSchema);
