import {  CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType"

const iniatialState = {
    products:[],
    product:null,
    loading:false,
    error:null,
}

export const customerProductReducer = (state=iniatialState , action)=>{

    switch(action.type){
        case FIND_PRODUCTS_REQUEST:
        case FIND_PRODUCT_BY_ID_REQUEST:
        // case CREATE_PRODUCT_REQUEST:
            return {...state , loading:true,error:null}
        
        case FIND_PRODUCTS_SUCCESS:
            return {...state , loading:false , error:null , products:action.payload}
        
        // case CREATE_PRODUCT_SUCCESS:
        //     return { ...state, loading: false, error: null, product: action.payload }

        case FIND_PRODUCT_BY_ID_SUCCESS:
            return {...state , loading:false , error:null , product:action.payload}

        case DELETE_PRODUCT_SUCCESS:
            return{...state , loading:false , error:null , deletedProduct:action.payload}

        case FIND_PRODUCTS_FAILURE:
        case FIND_PRODUCT_BY_ID_FAILURE:
        // case CREATE_PRODUCT_FAILURE: 
            return {...state , loading:false , error:action.payload}

        default:
            return state;
    }

}

// export const FIND_PRODUCT_BY_ID_REQUEST = "FIND_PRODUCT_BY_ID_REQUEST"
// export const FIND_PRODUCT_BY_ID_SUCCESS = "FIND_PRODUCT_BY_ID_SUCCESS"
// export const FIND_PRODUCT_BY_ID_FAILURE = "FIND_PRODUCT_BY_ID_FAILURE"

// export const FIND_PRODUCTS_REQUEST = "FIND_PRODUCT_BY_CATEGORY_REQUEST"
// export const FIND_PRODUCTS_SUCCESS = "FIND_PRODUCT_BY_CATEGORY_SUCCESS"
// export const FIND_PRODUCTS_FAILURE = "FIND_PRODUCT_BY_CATEGORY_FAILURE"

// export const DELETE_PRODUCT_REQUEST = "DELETE_PRODUCT_REQUEST"
// export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS"
// export const DELETE_PRODUCT_FAILURE = "DELETE_PRODUCT_FAILURE"

// export const CREATE_PRODUCT_REQUEST = "CREATE_PRODUCT_REQUEST"
// export const CREATE_PRODUCT_SUCCESS = "CREATE_PRODUCT_SUCCESS"
// export const CREATE_PRODUCT_FAILURE = "CREATE_PRODUCT_FAILURE"



// import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType";
// import { api, API_BASE_URL } from "../../config/apiConfig"

// export const findProducts = (reqData) => async (dispatch) => {
//     dispatch({ type: FIND_PRODUCTS_REQUEST })
//     const {
//         colors,
//         sizes,
//         minPrice,
//         maxPrice,
//         minDiscount,
//         category,
//         stock,
//         sort,
//         pageNumber,
//         pageSize,
//     } = reqData;
//     console.log("before : ", reqData)
//     try {
//         const { data } = await api.get(`/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
//         // console.log("product Data : ", data);
//         console.log("after data : ", data)

//         dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data })
//     }
//     catch (error) {
//         console.log("findProduct error : ", error)
//         dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message })

//     }
// }


// export const findProductsById = (reqData) => async (dispatch) => {
//     dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST })
//     const { productId } = reqData;

//     try {
//         const { data } = await api.get(`/api/products/id/${productId}`)
//         console.log("data : ", data)

//         dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data })
//     }
//     catch (error) {
//         console.log("findProductBy : ", error)
//         dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message })

//     }
// }


// export const createProduct = (product) => async (dispatch) => {
//     try {
//         dispatch({ type: CREATE_PRODUCT_REQUEST })
//         console.log(" product : ", product)

//         const { data } = await api.post(`/api/admin/products/`, product);
//         console.log("create product : ", data)
//         const val = dispatch({
//             type: CREATE_PRODUCT_SUCCESS,
//             payload: data,
//         })
//         console.log("cal : ", val)
//     }
//     catch (error) {
//         dispatch({ type: CREATE_PRODUCT_FAILURE, payload: error.message })
//     }
// }


// export const deleteProduct = (productId) => async (dispatch) => {
//     try {
//         dispatch({ type: DELETE_PRODUCT_REQUEST })

//         const { data } = await api.delete(`/api/admin/products/${productId}`);
//         dispatch({
//             type: DELETE_PRODUCT_SUCCESS,
//             payload: productId,
//         })
//     }
//     catch (error) {
//         console.log("action error : ", error.message)
//         dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message })
//     }
// }