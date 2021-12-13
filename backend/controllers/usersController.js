const User = require('../models/User');
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');

const usersController = {
    newUser: async (req, res) => {
        const { userName, email, password, userImage, country, google } = req.body
        const hashedPassword = bcryptjs.hashSync(password)
        const newUser = new User({ userName, email, password: hashedPassword, userImage, country, google })
        try {
            console.log(newUser)
            let repeatedUser = await User.findOne({ email })
            if (repeatedUser) throw new Error
            await newUser.save()
            res.json({ success: true, response: { userName: newUser.userName, _id: newUser._id, email: newUser.email, userImage: newUser.userImage }, error: null })
        } catch (error) {
            res.json({ success: false, response: error.message })
        }
    },
    signIn: async (req, res) => {
        const { email, password } = req.body
        try {
            let savedUser = await User.findOne({ email })
            if (!savedUser) throw new Error('Email and/or password incorrect')
            let match = bcryptjs.compareSync(password, savedUser.password)
            if (!match) throw new Error('Email and/or password incorrect')
            res.json({ success: true, response: { userName: savedUser.userName, userImage: savedUser.userImage } })
            console.log(savedUser)
        } catch (error) {
            res.json({ success: false, response: error.message })
        }
    }
}

module.exports = usersController