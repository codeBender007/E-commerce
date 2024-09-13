import { api } from "../../config/apiConfig";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILRUE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionType";


export const createOrder = (reqData) => async (dispatch) =>{
    dispatch({ type: CREATE_ORDER_REQUEST })
    console.log("address : ",reqData.address)

    try{
console.log('fame')
        const { data } = await api.post(
            `https://e-commerce-backend-mgkx.onrender.com/api/orders/`,
            reqData.address,
        );
        console.log("data : ",data)
        if(data._id){
            reqData.navigate({search:`step=3&order_id=${data._id}`});
        }
        console.log("created order - ",data);
        dispatch({
            type: CREATE_ORDER_SUCCESS,
            payload:data,
        });

    }
    catch(error){
        console.log("Action createOrder : ", error.message)
        dispatch({
            type:CREATE_ORDER_FAILURE,
            payload:error.message,
        });
    }
};


export const getOrderById = (orderId) => async (dispatch) =>{
    dispatch({type: GET_ORDER_BY_ID_REQUEST});
    try{
        const { data } = await api.get(
            `https://e-commerce-backend-mgkx.onrender.com/api/orders/${orderId}`,
        );
        console.log("import : ",data)
        dispatch({
            type:GET_ORDER_BY_ID_SUCCESS,
            payload:data,
        });

    }
    catch(error){
        console.log("action getOrderById : ",error.message);
        dispatch({
            type:GET_ORDER_BY_ID_FAILRUE,
            payload:error.message,
        });
    }
}
