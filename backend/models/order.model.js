const mongoose = require("mongoose")
const { Schema } = mongoose;

const orderSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    orderItems:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"orderItems"
    }],
    orderDate:{
        type:Date,
        required:true,
        default:Date.now(),
    },
    deliveryDate:{
        type:Date,
    },
    shippingAddress:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"addresses",
    },
    paymentDetails:{
        paymentMethod:{
            type:String,
        },
        transactionId:{
            type:String,
        },
        paymentId:{
            type:String,
        },
        paymentStatus:{
            type:String,
            default:"PENDING",
        },
    },
    totalPrice:{
        type:String,
        required:true,
    },
    totalDiscountedPrice:{
        type: String,
        required: true,
    },
    discounte:{
        type: String,
        required: true,
    },
    orderStatus:{
        type: String,
        required: true,
        default:"PENDING",
    },
    totalItem:{
        type: String,
        required: true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    }
})

const Orders = mongoose.model('Orders',orderSchema);
module.exports = Orders;

// module.exports = mongoose.model('orders', orderSchema);


