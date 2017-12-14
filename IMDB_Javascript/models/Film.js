const mongoose = require('mongoose');

let filmSchema = mongoose.Schema({
    name: {type: String, require: true},
    genre: {type: String, require: true},
    director: {type: String, require: true},
    year: {type: Number, require: true},
});

let Film = mongoose.model('Film', filmSchema);

module.exports = Film;