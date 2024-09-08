const userService = require("../services/user.service")

const getUserProfile = async (req , res) =>{
    try{
        const token = req.headers.authorization?.split(" ")[1];

        if(!token){
            return res.status(404).send({
                message:"Token is not found...",
            })
        }
        const user = await userService.getUserProfileByToken(token);

        return res.status(200).send({
            user
        })
    }
    catch(err){
        return res.status(500).send({ error: `this is getUSerProfile : ${err.message}` });

    }
}

const getAllUsers = async(req , res) =>{
    try{
        const users = await userService.getAllUser()

        return res.status(200).send({users})
    }
    catch(err){
        return res.status(500).send({ error: `this is getAllUsers : ${err.message}` });

    }
}

module.exports = {
    getUserProfile,
    getAllUsers
}