const productService = require("../services/product.service")

const createProduct = async (req , res) =>{
    console.log("async : ",req)

    try{
        const product = await productService.createProduct(req);
        return res.status(201).send(product);
    }
    catch(err){

        return res.status(500).send({ error: `this is createProduct : ${err.message}`});
    }
}


const deleteProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await productService.deleteProduct(productId);
        return res.status(201).send(product);
    }
    catch (err) {
        return res.status(500).send({ error: `this is deleteProduct : ${err.message}` });
    }
}


const updateProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await productService.updateProduct(productId , req.body);
        return res.status(201).send(product);
    }
    catch (err) {
        return res.status(500).send({ error: `this is updateProduct : ${err.message}` });

    }
}


const findProductById = async (req, res) => {
    const productId = req.params.id;
    
    try {
        const product = await productService.findProductById(productId);
        console.log("hello11")
        return res.status(201).send(product);
    }
    catch (err) {
        console.log(`this is findProductbyId : ${err.message}`)
        return res.status(500).send({ error: `this is findProductbyId : ${err.message}` });

    }
}


const getAllProducts = async (req, res) => {
    // const productId = req.params.id;
    // console.log("req : ",req)
    try {
        const products = await productService.getAllProducts(req.query);
        return res.status(201).send(products);


    }
    catch (err) {
        console.log("this is getAllProduct : ",err)
        return res.status(500).send({ error: `this is getAllPRoducts : ${err.message}` });

    }
}


const createMultipleProduct = async (req, res) => {
    // const productId = req.params.id;
    try {
        const products = await productService.createMultipleProduct(req.body);
        return res.status(201).send({
            message: "Products created successfully",
            success:true,
        });
    }
    catch (err) {
        return res.status(500).send({ error: `this is createmultipleProduct : ${err.message}` });

    }
}


module.exports = {
    createProduct,
    deleteProduct,
    updateProduct,
    findProductById,
    getAllProducts,
    createMultipleProduct
}