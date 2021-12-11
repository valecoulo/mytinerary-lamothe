const User = require('../models/User');

const usersController = {
    newUser: async(req, res) => {
        const { userName, password } = req.body

        const newUser = new User({
            userName,
            password
        })

        try {
            console.log(newUser)
            res.json({ success: true, response: newUser, error: null })
        } catch(error) {
            res.json({ success: false, response: null, error: error })
        }
    }
}

module.exports = usersController