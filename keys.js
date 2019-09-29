console.log('this is loaded and working');

var dotenv = require("dotenv").config();

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET,
};

exports.bands = {
    id: process.env.BANDSINTOWN_API_KEY,
}

exports.movies = {
    id: process.env.OMDB_API_KEY,
}