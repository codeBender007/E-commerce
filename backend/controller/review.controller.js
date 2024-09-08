const reviewService = require("../services/review.service")

const createReview = async(req , res) =>{

    const user = req.user;
    try{
        const review  = await reviewService.createReview(req.body , user);
        return res.status(201).send(review);
    }
    catch(err){
        return res.status(500).send({ error: `this is createReview : ${err.message}` });

    }
}


const getAllReview = async (req, res) => {
    const productId = req.params.productId;
    const user = req.user;
    try {
        const reviews = await reviewService.getAllReview(productId);
        return res.status(201).send(reviews);
    }
    catch (err) {
        return res.status(500).send({ error: `this is getAllReview : ${err.message}` });

    }
}

module.exports = {
    createReview,
    getAllReview,
}