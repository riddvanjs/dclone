const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movies');
const Auth = require('../middleware/auth')

router.get('/movies', Auth.isAuthenticated, movieController.getAllMovies);

module.exports = router;