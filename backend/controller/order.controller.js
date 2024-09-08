const orderService = require("../services/orderService");

const createOrder = async (req , res) =>{
    const user = await req.user;
    try{    
        let createOrder = await orderService.createOrder(user , req.body);
        return res.status(201).send(createOrder);
    }
    catch(err){
        console.log(`this is createOrder : ${err.message}`)
        return res.status(500).send({ error: `this is createOrder : ${err.message}` });

    }
}


const findOrderById = async (req, res) => {
    const user = await req.user;
    try {
        let createOrder = await orderService.findOrderById(req.params.id);
        return res.status(201).send(createOrder);
    }
    catch (err) {
        console.log(`this is findOrderById : ${err.message}`)
        return res.status(500).send({ error: `this is findOrderById : ${err.message}` });

    }
}


const orderHistory = async (req, res) => {
    const user = await req.user;
    try {
        let createOrder = await orderService.usersOrderHistory(user._id);
        return res.status(201).send(createOrder);
    }
    catch (err) {
        return res.status(500).send({ error: `this is orderHistory : ${err.message}` });

    }
}




module.exports = {
    createOrder,
    findOrderById,
    orderHistory,
    // deleteOrder
}