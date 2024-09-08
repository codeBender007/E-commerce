const userService = require("../services/user.service")
const CartItem = require("../models/cartItem.model")

async function updateCartItem(userId , cartItemId , cartItemData){
    try{
        const item = await  findCartItemById(cartItemId)

        // if(!item){
        //     throw new Error("Cart item not found : ",cartItemId);
        // }

        const user = await userService.findUserbyId(item.userId);

        if(!user){
            throw new Error("USer not found : ",userId);
        }

        if(user._id.toString() === userId.toString()){
            item.quantity = cartItemData.quantity;
            item.price = item.quantity * item.product.price;
            item.discountedPrice = item.quantity * item.product.discountedPrice;
            const updatedCartItem = await item.save();
            return updatedCartItem;
        }
        else{
            throw new Error("You Can't update this CartItem");
        }
    }
    catch(error){
        throw new Error(error.message);
    }   
}

async function removeCartItem(userId , cartItemId){
    const cartItem = await findCartItemById(cartItemId);
    const user = await userService.findUserbyId(userId);

    if(user._id.toString() === cartItem.userId.toString()){
        await CartItem.findByIdAndDelete(cartItemId);
    }
    else{
    throw new Error("You Can't remove another user's item");
    }
}


async function findCartItemById(cartItemId){    
    // const cartItem = await CartItem.findCartItemById(cartItemId)
    const cartItem = await CartItem.findById(cartItemId).populate("product");

    if(cartItem){
        return cartItem
    }
    else{
        throw new Error("CartItem not found this ID : ",cartItemId);
    }
}

module.exports = {
    updateCartItem,
    removeCartItem,
    findCartItemById
}