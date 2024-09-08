import { api } from "../../config/apiConfig"
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"


export const getCart = () => async (dispatch) => {
    dispatch({ type: GET_CART_REQUEST })

    try {
        const { data } = await api.get(`/api/cart/`)
        dispatch({ type: GET_CART_SUCCESS, payload: data })
        console.log("cartttss : ",data);
    }
    catch (error) {
        dispatch({ type: GET_CART_FAILURE, payload: error.message })
    }
}


export const addItemToCart = (reqData) => async (dispatch) => {
    // console.log("reqData : ", reqData)

    dispatch({ type: ADD_ITEM_TO_CART_REQUEST })

    try {
        console.log("adnan1")
        console.log("action req : ",reqData)

        const { data } = await api.put("/api/cart/add",reqData)
        console.log("Add item to  Cart : ", data)

        console.log("adnan2")
        dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data })
    }
    catch (error) {
        console.log("error action : ",error.message);
        dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message })
    }
}


export const removeCartItem = (cartItemId) => async (dispatch) => {
    dispatch({ type: REMOVE_CART_ITEM_REQUEST })

    try {
        const { data } = await api.delete(`/api/cart_items/${cartItemId}`)
        dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: cartItemId })
    }
    catch (error) {
        dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message })
    }
}


export const updateCartItem = (reqData) => async (dispatch) => {
    dispatch({ type: UPDATE_CART_ITEM_REQUEST })

    try {
        const { data } = await api.put(`/api/cart_items/${reqData.cartItemId}`, reqData.data)
        dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message })
    }
}