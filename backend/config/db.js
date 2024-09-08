const mongoose = require("mongoose")

const connectdb = async () => {
    await mongoose.connect("mongodb://localhost:27017/ecommerce")
    try {
        console.log("db connect")
    }
    catch (err) {
        console.log("this is error during db connect : ", err);
    }
}

module.exports = connectdb;