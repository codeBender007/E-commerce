import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType";
import { api, API_BASE_URL } from "../../config/apiConfig"

export const findProducts = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCTS_REQUEST })
    const {
        colors,
        sizes,
        minPrice,
        maxPrice,
        minDiscount,
        category,
        stock,
        sort,
        pageNumber,
        pageSize,
    } = reqData;
    console.log("before : ",reqData)
    try {
        const { data } = await api.get(`https://e-commerce-backend-mgkx.onrender.com/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
        // console.log("product Data : ", data);
        console.log("after data : ", data)

        dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data })
    }
    catch (error) {
        console.log("findProduct error : ", error)
        dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message })

    }
}


export const findProductsById = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST })
    const { productId } = reqData;

    try {
        const { data } = await api.get(`https://e-commerce-backend-mgkx.onrender.com/api/products/id/${productId}`)
        console.log("data : ",data)

        dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data })
    }
    catch (error) {
        console.log("findProductBy : ", error)
        dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message })

    }
}


export const createProduct = (product) =>async(dispatch)=>{
    try{
        dispatch({type:CREATE_PRODUCT_REQUEST})
        console.log(" product : ", product)

        const {data} = await api.post(`https://e-commerce-backend-mgkx.onrender.com/api/admin/products/`,product);
        console.log("create product : ",data)
        const val = dispatch({
            type:CREATE_PRODUCT_SUCCESS,
            payload:data,
        })
    }
    catch(error){
        dispatch({type:CREATE_PRODUCT_FAILURE , payload:error.message})
    }
}


export const deleteProduct = (productId) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_PRODUCT_REQUEST })

        const { data } = await api.delete(`https://e-commerce-backend-mgkx.onrender.com/api/admin/products/${productId}`);
        dispatch({
            type: DELETE_PRODUCT_SUCCESS,
            payload: productId,
        })
    }
    catch (error) {
        console.log("action error : ",error.message)
        dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message })
    }
}
