const userService = require("../services/user.service")
const jwtProvider = require("../config/jwtProvider")
const bcrypt = require("bcrypt")
const cartService = require("../services/cart.service")
const User = require("../models/user.model");

// this is backend
const register = async (req, res) => {
    try {
        const user = await userService.createUser(req.body)
        const jwt = jwtProvider.generateToken(user._id)
        await cartService.createCart(user);
        return res.status(200).send({
            jwt,
            message: "registration successfull",
        })
    }
    catch (err) {
        return res.status(500).send({ error: `this is register : ${err.message}` });

    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const Email = await userService.getUserbyEmail(email)
        const user = await User.findOne({ email })
        await cartService.createCart(user);
        if (!Email) {
            return res.status(404).send({
                email,
                message: "user not found with email",
            })
        }
        // console.log(`email : ${email} : password : ${password}`)
        //         console.log(`password : ${user.password}`)

        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            return res.status(401).send({
                message: "Password Incorrect...",
            })
        }

        const jwt = jwtProvider.generateToken(user._id)

        return res.status(200).send({
            jwt,
            message: "login successfully.."
        })

    }
    catch (error) {
        return res.status(500).send({ error: `this is login : ${error.message}` });

    }
}

module.exports = {
    register,
    login
}




