const User = require("../models/user.model");
const bcrypt = require("bcrypt")
const jwtProvider = require("../config/jwtProvider")

// const createUser = async (req , res) =>{
const createUser = async (userData) => {
    try{
        const { firstName, lastName, email, password } = userData;

        const isUserExist = await User.findOne({email})

        if(isUserExist){
            throw new Error("user already exist with this email : ",email);
        }
        console.log("data : ", firstName, lastName, email, password)

        if (!firstName || !lastName || !email || !password) {
            // return res.status(403).json({
            //     success: false,
            //     message: "All fields are Required",
            // })

            throw new Error("Fill All Fields..");

        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({firstName , lastName , email , password:hashedPassword})


        console.log("create user : ",user)

        return user;

    }
    catch(err){
        // console.log("This is signup ERROR : ", err)
        // return res.status(500).json({
        //     success: false,
        //     message: "User cannot not be Registered Please try again",
        // })
    
        return new Error(err.message)

    }
}

const findUserbyId = async (userId)=>{
    try{
        const user = await User.findById(userId).populate("address")

        if(!user){
            throw new Error("user not found with id : ",userId) 
        };
        return user;
    }
    catch(err){
        throw new Error(err.message)
    }
}

const getUserbyEmail = async (email) => {
    try {
        const Email = await User.findOne({email})

        if (!Email) {
            throw new Error("user not found with email : ", Email)
        };
        return email;
    }
    catch (err) {
        throw new Error(err.message)
    }
}

const getUserProfileByToken  = async (token)=>{
    try{
        const userId = jwtProvider.getUserIdFromToken(token);

        const user = await User.findById(userId)

        if (!user) {
            throw new Error("user not found with id : ", userId);
        }
        return user
    }
    catch(error){
        throw new Error(error.message)
    }
}

const getAllUser = async () =>{
    try{
        const users = await User.find();
        return users
    }
    catch(error){
        throw new Error(error.message)
    }
}



module.exports = {
    getAllUser,
    createUser,
    findUserbyId,
    getUserbyEmail,
    getUserProfileByToken
}; 