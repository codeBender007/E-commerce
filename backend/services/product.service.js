const Category = require("../models/category.model")
const Product = require("../models/product.model")




async function createProduct(reqData){
    console.log("helloadnan")
    let topLevel = await Category.findOne({ name: reqData.body.topLavelCategory })
    // let topLevel = await Category.findOne({ name: reqData.body.data.topLavelCategory })
    console.log("helloadnan2")

    if(!topLevel){
        topLevel = new Category({
            // name: reqData.body.data.topLavelCategory,
            name: reqData.body.topLavelCategory,
            level:1,
        })
        await topLevel.save();
    }

    let secondLevel = await Category.findOne({
        // name: reqData.body.data.secondLavelCategory,
        name: reqData.body.secondLavelCategory,
        parentCategory:topLevel._id,
    })

    if(!secondLevel){
        secondLevel = new Category({
            // name: reqData.body.data.secondLavelCategory,
            name: reqData.body.secondLavelCategory,
            parentCategory: topLevel._id,
            level: 2,
        })
        await secondLevel.save();

    }

    let thirdLevel = await Category.findOne({
        // name: reqData.body.data.thirdLavelCategory,
        name: reqData.body.thirdLavelCategory,
        parentCategory: secondLevel._id,
    })

    if (!thirdLevel) {
        thirdLevel = new Category({
            // name: reqData.body.data.thirdLavelCategory,
            name: reqData.body.thirdLavelCategory,
            parentCategory: secondLevel._id,
            level: 3,
        })
        await thirdLevel.save();

    }

    const product = new Product({
        // title: reqData.body.data.title,
        // color: reqData.body.data.color,
        // description: reqData.body.data.description,
        // discountedPrice: reqData.body.data.discountedPrice,
        // discountPersent: reqData.body.data.discountPersent,
        // imageUrl: reqData.body.data.imageUrl,
        // brand: reqData.body.data.brand,
        // price: reqData.body.data.price,
        // sizes: reqData.body.data.size,
        // quantity: reqData.body.data.quantity,
        // category:thirdLevel._id,  

        title: reqData.body.title,
        color: reqData.body.color,
        description: reqData.body.description,
        discountedPrice: reqData.body.discountedPrice,
        discountPersent: reqData.body.discountPersent,
        imageUrl: reqData.body.imageUrl,
        brand: reqData.body.brand,
        price: reqData.body.price,
        sizes: reqData.body.size,
        quantity: reqData.body.quantity,
        category: thirdLevel._id,
    })
    console.log("data pro : ",product)
    return await product.save();
}


async function deleteProduct(productId){
    const product = await findProductById(productId);

    await Product.findByIdAndDelete(productId);
    return "Product Deleted Successfully..";
}


async function updateProduct(productId , reqData){
    return await Product.findByIdAndUpdate(productId , reqData);
}


async function findProductById(id){

    const product = await Product.findById(id).populate("category").exec();
    if(!product){
        throw new Error("Product not found with the Id : ",id);
    }
    return product;
}


async function getAllProducts(reqQuery){
    let { category,color,sizes,minPrice,maxPrice,minDiscount,sort,stock,pageNumber,pageSize } = reqQuery
    pageSize = pageSize || 10;
    pageNumber = pageNumber > 0 ? pageNumber : 1;
    console.log("fun : ", category, color, sizes, minPrice, maxPrice, minDiscount, sort, stock, pageNumber, pageSize)
    let query = Product.find().populate("category");


    if(category){
        const existCategory = await Category.findOne({name:category});
        if(existCategory){
            query = query.where("category").equals(existCategory._id);
        }
        else{
            return {content:[] , currentPage:1 , totalPages:0};
        }
    }

    if(color){
        const colorSet = new Set(color.split(",").map(color=>color.trim().toLowerCase()));
        const colorRegex = colorSet.size>0? new RegExp([...colorSet].join("|"),"i"):null;
        query = query.where("color").regex(colorRegex);
    }

    if(sizes){
        const sizesSet = new Set(sizes);
        query= query.where("sizes.name").in([...sizesSet]);
    }

    if(minPrice && maxPrice){   

        query= query.where("discountedPrice").gte(minPrice).lte(maxPrice);
    }

    if(minDiscount){

        query = query.where("discountPersent").gt(minDiscount);
    }

    if(stock){

        if(stock == "in_stock"){
            query= query.where("quantity").gt(0);
        }
        else if(stock == "out_of_stock") {
            query = query.where("quantity").gt(1);
        }
    }

    if(sort){

        const sortDirection = sort=== "price_height"?-1:1;
        query= query.sort({discountedPrice:sortDirection})
    }

    const totalProducts = await Product.countDocuments(query);

    const skip = (pageNumber-1)*pageSize;

    query = query.skip(skip).limit(pageSize);

    const products = await query.exec(); 

    const totalPages = Math.ceil(totalProducts/pageSize)
    return {content:products , currentPage:pageNumber , totalPages,}

}



async function getAllPRoducts(reqData){
    try{
        const data = await Product.findOne()
    }
    catch(err){
        console.log("error getALll product : ",err)
    }
}


async function createMultipleProduct(products){
    for(let product of products){
        await createProduct(product);
    }
}

module.exports = {
    createProduct,
    deleteProduct,
    updateProduct,
    getAllProducts,
    findProductById,
    createMultipleProduct,
}
