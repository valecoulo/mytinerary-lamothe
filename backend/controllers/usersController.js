const User = require('../models/User');
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');

const usersController = {
    newUser: async (req, res) => {
        console.log(req.body);
        const { userName, email, password, userImage, country, google } = req.body
        const hashedPassword = bcryptjs.hashSync(password)
        const newUser = new User({ userName, email, password: hashedPassword, userImage, country, google })
        try {
            const repeatedUser = await User.findOne({email})
            if(repeatedUser) throw new Error
            const token = jwt.sign({...newUser}, process.env.SECRET_KEY)
            await newUser.save()
            res.json({ success: true, response: { userName: newUser.userName, _id: newUser._id, email: newUser.email, userImage: newUser.userImage, token }, error: null })
        } catch(error) {
            res.json({success: false, response: error.message})
        }
    },
    signIn: async (req, res) => {
        const {email, password, google} = req.body 
        try {
            const user = await User.findOne({email})
            if (!user) throw new Error ("Email or password incorrect");
            if (user.google && !google) throw new Error ("Invalid email");
            const isPassword = bcryptjs.compareSync(password, user.password);
            if (!isPassword) throw new Error ("Email or password incorrect");
            const token = jwt.sign({...user}, process.env.SECRET_KEY)
            res.json({success: true, response:{token, userName: user.userName, userImage: user.userImage}})
        } catch (error) {
            res.json({success: false, response: error.message})
        }
    },
    verifyToken : (req, res) => {
        res.json({userName: req.user.userName, userImage:req.user.userImage})
    }
}

module.exports = usersController