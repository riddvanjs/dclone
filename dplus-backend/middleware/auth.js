const jwt = require('jsonwebtoken');
const HttpStatus = require('http-status-codes')

module.exports = {
    isAuthenticated(req, res, next) {
        const { APP_SECRET } = process.env;
        const token = `${req.headers.authorization}`;
        const bearer = token.split('Bearer ');
        const bearerToken = bearer[1];

        if (!bearerToken) {
            return res.status(HttpStatus.BAD_REQUEST).send({
                message: 'Geen token gevonden',
            });
        }

        try {
            jwt.verify(bearerToken, APP_SECRET, (err, decoded) => {
                if (err) {
                    return res.status(HttpStatus.BAD_REQUEST).send({
                        message: 'Geen token gevonden',
                    });
                }

                req.decodedToken = decoded;

                return next();
            });
        } catch (ex) {
            return res.status(HttpStatus.BAD_REQUEST).send({
                message: 'Geen geldige token.'
            });
        }
    },
};
