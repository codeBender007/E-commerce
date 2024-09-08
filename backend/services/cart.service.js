const Cart = require("../models/cart.model")
const cartItem = require("../models/cartItem.model")
const Product = require("../models/product.model")


async function createCart(user){
    try{
        const cart = new Cart({user});
        // console.log("cart : ",cart)
        const createdCart = await cart.save();

        return createdCart;
    }
    catch(err){
        throw new Error(`this is error : ${err.message}`);
    }
}

async function findUserCart(userId){
    try{
        const cart = await Cart.findOne({user:userId})
        console.log("run : ",cart)

        const cartItems = await cartItem.find({cart:cart._id}).populate("product");
        // console.log("cartitme : ",cartItems);

        cart.cartItems = cartItems;

        let totalPrice = 0;
        let totalDiscountedPrice = 0;
        let totalItem = 0;

        for(let cartItem of cart.cartItems){
            totalPrice += cartItem.price;
            totalDiscountedPrice += cartItem.discountedPrice;
            totalItem += cartItem.quantity;
        }

        cart.totalPrice = totalPrice;
        cart.totalItem = totalItem;
        cart.discounte = totalPrice - totalDiscountedPrice;
        cart.totalDiscountedPrice = totalDiscountedPrice;

        return cart;

    }
    catch(error){
        console.log("find user  : ", err.message)
        throw new Error(error.massage);
    }
}

async function addCartItem(userId , req){
    try{
        // console.log("user ID : ",userId)
        const cart = await Cart.findOne({user:userId})
        // console.log("cart det : ",cart)

        console.log("hello1")

        const product = await Product.findById(req.body.productId)
        // const product = await Product.findById(req.productId)
        // console.log("product : ",product)
        console.log("hello2")

        const isPresent = await cartItem.findOne({ cart: cart?._id, product: product?._id,userId })
        console.log("hello3")


        if(!isPresent){
            const CartItem = new cartItem({
                product:product._id,
                cart:cart._id,
                quantity:1,
                userId,
                price:product.price,
                size: req.body.size,
                discountedPrice:product.discountedPrice,
            })
            // console.log("item : ",CartItem)
            console.log("hello4")
            const createdCartItem=await CartItem.save();
            console.log("hello5")

            cart.cartItems.push(createdCartItem);
            console.log("hello6")

            await cart.save(); 
            return "Item added to cart";
        }
    }
    catch(error){
        console.log("find user by cart : ",error.message)
        throw new Error(error.massage);
    }
}




module.exports = {
    createCart,
    findUserCart,
    addCartItem
}