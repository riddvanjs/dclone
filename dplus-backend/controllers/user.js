const HttpStatus = require('http-status-codes');
const userModel = require('../models/User');
const jwt = require('jsonwebtoken');
const {AddMemberSchemaValidation} = require('../schema_validations/addmember.validation');

async function addMember(req, res) {
    const {error, value} = AddMemberSchemaValidation.validate(req.body);

    if (error) {
        const errorMessages = error.details.map((el) => el.message);
        return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
            message: errorMessages
        })
    }

    const { email, password, accounts } = value;
    const requestBody = { email, password, accounts };

    try {
        const createdUser = await userModel.create(requestBody)
        return res.status(HttpStatus.CREATED).json({
            message: 'Account aangemaakt!',
            createdUser,
        });
    } catch (catchError) {
        const { code, keyValue } = catchError;
        const duplicatedKey = Object.keys(keyValue)[0];
        const duplicatedValue = Object.values(keyValue)[0];

        if (code === 11000) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: `Er bestaat al een gebruiker met de ${duplicatedKey}: ${duplicatedValue}`,
            });
        }

        return res.status(HttpStatus.BAD_REQUEST).json({
            message: catchError,
        });
    }
}

async function login(req, res) {
    const query = { email: req.body.email };
    const { APP_SECRET } = process.env;
    const tokenOptions = { expiresIn: '24h' };
   
    try {
        const user = await userModel.findOne(query).select('email password').exec();

        if (!user) {
            return res.status(HttpStatus.NOT_FOUND).json({ message: 'Email of wachtwoord is onjuist' });
        }
        const candidatePassword = req.body.password;
        const { password, email } = user;
        const isValid = await userModel.comparePassword(candidatePassword, password)
        
        if (!isValid) {
            return res.status(HttpStatus.UNAUTHORIZED).json({
                message: "Wrong email or password"
            })
        }


        const payload = { email, id: user._id };
        const token = jwt.sign(payload, APP_SECRET, tokenOptions);

        return res.status(HttpStatus.OK).json({
            message: 'Ingelogd!',
            token,
        })

    } catch(e) {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            message: 'Er ging iets mis met de server'
        })
    }
}

function me(req, res) {
    const {id} = req.decodedToken;
    const query = {_id: id};

    userModel.findById(query)
        .select('_id email accounts')
        .exec((err, user) => {
            if (err) throw err;

            if (!user) {
                return res.status(HttpStatus.NOT_FOUND).json({message: 'Lid niet gevonden'});
            }

            return res.status(HttpStatus.OK).json({user});
        });
}

module.exports = {
    addMember,
    login,
    me
}
