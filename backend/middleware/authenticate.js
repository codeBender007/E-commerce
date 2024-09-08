const jwtProvider = require("../config/jwtProvider")
const userService = require("../services/user.service")

// const authenticate = async (req , res , next) => {
//     try{
//         const token = req.headers.authorization?.split(" ")[1];
//         if(!token){
//             return res.status(404).send({error:"token not found..."});
//         }

//         const userId = jwtProvider.getUserIdFromToken(token);
//         const user = userService.findUserbyId(userId);
//         req.user = user;
//     }
//     catch(err){
//         return res.status(500).send({ error: `this is middleware : ${err.message}` });

//     }
//     next();
// }

const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(404).send({ error: "token not found..." });
        }

        const userId = jwtProvider.getUserIdFromToken(token);
        const user = await userService.findUserbyId(userId); // Await the asynchronous operation


        if (!user) {
            return res.status(404).send({ error: "User not found..." });
        }

        req.user = user;
        next(); // Move next() here to be within the try block
    } catch (err) {
        return res.status(500).send({ error: `this is middleware : ${err.message}` });
    }
};


module.exports = authenticate;