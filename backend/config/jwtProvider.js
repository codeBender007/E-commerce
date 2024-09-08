const jwt = require("jsonwebtoken")

const SECRET_KEY = "adnanPasha";

const generateToken = (userId) =>{
    const token = jwt.sign({userId},SECRET_KEY,{expiresIn:"48h"});
    return token;
};

const getUserIdFromToken = (token) =>{
    const decodeToken = jwt.verify(token,SECRET_KEY);
    return decodeToken.userId;
};

module.exports = {
    generateToken,
    getUserIdFromToken,
}