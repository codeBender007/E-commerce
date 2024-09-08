const Address = require("../models/address.model")
const cartService = require("../services/cart.service")
const Order = require("../models/order.model")
const OrderItem = require("../models/orderItems")

async function createOrder(user , shipAddress){
    let address;
    console.log("address createORDer : ", shipAddress)
    console.log("user createORDer : ", user)
    if(shipAddress._id){

        let existAddress = await Address.findOneId(shipAddress._id);

        address = existAddress;
    }
    else{

        address = new Address(shipAddress);

        address.user = user;
        await address.save(); 

        user.address.push();
        await user.save();
    }

    const cart = await cartService.findUserCart(user._id);
    const orderItems = [];

    for(const item of cart.cartItems){
        const orderItem = new OrderItem({
            price:item.price,
            product:item.product,
            quantity:item.quantity,
            size:item.size,
            userId:item.userId,
            discountedPrice:item.discountedPrice,
        })
        console.log("ad9")

        const createdOrderItem = await orderItem.save();
        console.log("ad10")

        orderItems.push(createdOrderItem)
        console.log("ad9")

    }
    console.log("ad10")

    const createdOrder = new Order({
        user,
        orderItems,
        totalPrice:cart.totalPrice,
        totalDiscountedPrice:cart.totalDiscountedPrice,
        discounte:cart.discounte,
        totalItem:cart.totalItem,
        shippingAddress:address,
    })
    console.log("ad11")

    const savedOrder = await createdOrder.save();
    console.log("ad12")

    return savedOrder;
}


async function placeOrder(orderId) {
    const order = await findOrderById(orderId);

    order.orderStatus = "PLACED";
    order.paymentDetails.status = "COMPLETED";

    return await order.save();
}


async function confirmedOrder(orderId) {
    const order = await findOrderById(orderId);

    order.orderStatus = "CONFIRMED";

    return await order.save();
}


async function shipOrder(orderId) {
    const order = await findOrderById(orderId);

    order.orderStatus = "SHIPPED";

    return await order.save();
}


async function deliverOrder(orderId) {
    const order = await findOrderById(orderId);

    order.orderStatus = "DELIVERED";

    return await order.save();
}


async function cancelledOrder(orderId) {
    const order = await findOrderById(orderId);

    order.orderStatus = "CANCELLED";

    return await order.save();
}


async function findOrderById(orderId){
    console.log("oarderId : ",orderId)
    const order = await Order.findById(orderId)
    .populate("user")
    .populate({ path: "orderItems", populate: {path:"product"}})
    .populate("shippingAddress")

    return order;

}


async function usersOrderHistory(userId){
    try{
        const orders = await Order.find({user:userId , orderStatus:"PLACED"})
        .populate({path:"orderItems" , populate:{path:"product"}}).lean();

        return orders;
    }
    catch(error){
        throw new Error(error.message);
    }
}


async function getAllOrders(){

    return await Order.find()
        .populate({ path: "orderItems", populate: { path: "product" } }).lean();

}

async function deleteOrder(orderId){
    const order = await findOrderById(orderId)
    await Order.findByIdAndDelete(order._id);
}


module.exports = {
    createOrder,
    placeOrder,
    confirmedOrder,
    shipOrder,
    deliverOrder,
    cancelledOrder,
    findOrderById,
    usersOrderHistory,
    getAllOrders,
    deleteOrder,
}