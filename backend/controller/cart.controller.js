const cartService = require("../services/cart.service")

const findUserCart = async (req , res) =>{
    const user = req.user;
    try{
        const cart = await cartService.findUserCart(user._id);
        return res.status(200).send(cart);
    }
    catch(err){
        console.log("find user cart : ",err)
        return res.status(500).send({ error: `this is findUserCart : ${err.message}` });

    }
}


const addItemToCart = async (req, res) => {
    const user = req.user;

    try {
        const cartItem = await cartService.addCartItem(user._id , req)
        return res.status(200).send(cartItem);
    }
    catch (err) {
        return res.status(500).send({ error: `this is addItemToCart : ${err.message}` });

    }
}

module.exports = {
    findUserCart,
    addItemToCart,
}