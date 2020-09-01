const express = require('express');
const router = express.Router();

// Movie model
const Movie = require('../../models/Movie');

// @route   GET /api/movies
// @desc    Get all movies
// @access  Public
router.get('/', (req, res) => {
    Movie.find()
        .then(movies => res.json(movies));
});

// @route   POST /api/movies
// @desc    Create a movie
// @access  Public
router.post('/', (req, res) => {
    const newMovie = new Movie({
        title: req.body.name,
        year: Number(req.body.year),
        poster: req.body.poster,
        rating: Number(req.body.rating)
    });

    newMovie.save().then(movie => res.json(movie));
});

//example
// {
//     "name": "Return of the King",
//     "year": 2005,
//     "poster": "http://image.tmdb.org/t/p/original/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
//     "rating": 10
// }

// @route   DELETE /api/movies/:id
// @desc    Delete a movie
// @access  Public
router.delete('/:id', (req, res) => {
    Movie.findByIdAndDelete(req.params.id)
    .then(() => res.json('Movie deleted.'))
    .catch(err => res.status(404).json('Error: ' + err));
});

module.exports = router;
