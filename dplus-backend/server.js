require('dotenv').config();

const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const server = require('http').createServer(app);
const db = require('./config/database');

db.connection.on('error', console.error.bind(console, 'MongoDB Connection Error'));

const { PORT } = process.env;
const port = PORT || 3001;

app.get('/', (req, res) => {
    res.json({
        WebmenPortal: 'v1.0.0'
    });
});

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/user')
const movieRoutes = require('./routes/movie')
app.use('/api/v1', userRoutes);
app.use('/api/v1', movieRoutes);

server.listen(port);

module.exports = app;
