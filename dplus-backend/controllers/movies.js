const HttpStatus = require('http-status-codes');
const moviesSchema = require('../models/Movie');

async function getAllMovies(req, res) {
    try {
        const allMovies = await moviesSchema.find({}, {}).exec();

        if (allMovies.length === 0) {
            return res.status(HttpStatus.NO_CONTENT).json({
                message: 'No movies'
            })
        }

        return res.status(HttpStatus.OK).json({
            message: 'All movies',
            allMovies
        })

    } catch(e) {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            message: 'Error fetching movies'
        })
    }
}

module.exports = {
    getAllMovies
}