const orderService = require("../services/orderService")

const getAllOrders = async(req, res) => {
    try{
        const orders = await orderService.getAllOrders();
        return res.status(200).send(orders);
    }
    catch(err){
        return res.status(500).send({ error: `this is getAllOrders : ${err.message}` });

    }
}


const confirmedOrders = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const orders = await orderService.confirmedOrder(orderId);
        return res.status(200).send(orders);
    }
    catch (err) {
        return res.status(500).send({ error: `this is confirmedOrder : ${err.message}` });

    }
}


const shippOrders = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const orders = await orderService.shipOrder(orderId);
        return res.status(200).send(orders);
    }
    catch (err) {
        return res.status(500).send({ error: `this is shippOrders : ${err.message}` });

    }
}


const deliverOrders = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const orders = await orderService.deliverOrder(orderId);
        return res.status(200).send(orders);
    }
    catch (err) {
        return res.status(500).send({ error: `this is deliverORders : ${err.message}` });

    }
}


const cancelledOrders = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const orders = await orderService.cancelledOrder(orderId);
        return res.status(200).send(orders);
    }
    catch (err) {
        return res.status(500).send({ error: `this is cancelledOrders : ${err.message}` });

    }
}


const deleteOrders = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const orders = await orderService.deleteOrder(orderId);
        return res.status(200).send(orders);
    }
    catch (err) {
        return res.status(500).send({ error: `this is deleteOrders : ${err.message}` });

    }
}

module.exports = {
    getAllOrders,
    confirmedOrders,
    shippOrders,
    deliverOrders,
    cancelledOrders,
    deleteOrders,
}