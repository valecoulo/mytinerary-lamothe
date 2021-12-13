const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    userImage: {type: String},
    password: { type: String, required: true },
    country: { type: String, required: true },
    google: { type: Boolean, default: false }
})

const User = mongoose.model('user', userSchema);

module.exports = User;