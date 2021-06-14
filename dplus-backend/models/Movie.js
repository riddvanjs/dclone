const mongoose = require('mongoose');

const {Schema} = mongoose;

const MovieSchema = new Schema({
    backgroundImg: {
        type: String,
    },
    cardImg: {
        type: String
    },
    description: {
        type: String
    },
    subTitle: {
        type: String
    },
    title: {
        type: String
    },
    titleImg: {
        type: String
    },
    type: {
        type: String
    },
})


module.exports = mongoose.model('Movies', MovieSchema);