const ratingService = require("../services/rating.service")

const createRating = async (req, res) => {

    const user = req.user;
    try {
        const rating = await ratingService.createRating(req.body , user)
        return res.status(201).send(rating);
    }
    catch (err) {
        return res.status(500).send({ error: `this is createRating : ${err.message}` });

    }
}


const getAllRatings = async (req, res) => {
    const productId = req.params.productId;
    const user = req.user;
    try {
        const reviews = await ratingService.getAllRating(productId);
        return res.status(201).send(reviews);
    }
    catch (err) {
        return res.status(500).send({ error: `this is getAllRatings : ${err.message}` });

    }
}

module.exports = {
    createRating,
    getAllRatings,
}