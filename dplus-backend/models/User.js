const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const saltRounds = 10;

const {Schema} = mongoose;

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    accounts: [
        {
            userName: {
                type: String
            },
            avatar: {
                type: String
            }
        }
    ]
})

UserSchema.pre('save', async function save(next) {
    if (!this.isModified('password')) {
        return next();
    }

    try {
        const salt = await bcrypt.genSalt(saltRounds);
        this.password = await bcrypt.hash(this.password, salt)
        return next();
    } catch (err) {
        return next(err);
    }
});

UserSchema.statics.comparePassword = (candidatePassword, userPassword) => {
    return bcrypt.compare(candidatePassword, userPassword);
}

module.exports = mongoose.model('User', UserSchema);