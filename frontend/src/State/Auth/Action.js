// import axios from "axios"
import axios from "axios"
import { API_BASE_URL } from "../../config/apiConfig"
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from "./ActionType";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./ActionType";
import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE , LOGOUT } from "./ActionType";


const token = localStorage.getItem("jwt");

const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS , payload:user });
const registerFailure = (error) => ({ type:REGISTER_FAILURE , payload:error});

export const register = (userData) => async (dispatch)=>{
    // console.log("url : ",API_BASE_URL)
    dispatch(registerRequest());
    // console.log("hello")    

    try{
        const response = await axios.post(`https://e-commerce-backend-mgkx.onrender.com/auth/signup`,userData);
        const user = response.data;
        if(user.jwt){
            localStorage.setItem("jwt",user.jwt)
        }
        console.log("usersssss : ", user)

        dispatch(registerSuccess(user.jwt))
    }
    catch(err){
        dispatch(registerFailure(err.message));
    }
}




const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {

    dispatch(loginRequest());

    try {
        const response = await axios.post(`https://e-commerce-backend-mgkx.onrender.com/auth/signin`,userData);
        const user = response.data;
        if (user.jwt) {
            localStorage.setItem("jwt",user.jwt)
        }
        console.log("user : ", user)

        dispatch(loginSuccess(user.jwt))
    }
    catch (err) {
        dispatch(loginFailure(err.message));
    }
}



const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUser = (jwt) => async (dispatch) => {
    // export const getUser = (jwt) => async (dispatch) => {

    dispatch(getUserRequest());

    try {

        const response = await axios.get(`https://e-commerce-backend-mgkx.onrender.com/api/users/profile`, {
            headers:{
                // "Authorization": `Bearer ${token}`
                "Authorization": `Bearer ${jwt}`
            }
        });
        const user = response.data;
        console.log("user : ",user)
        dispatch(getUserSuccess(user))
    }
    catch (err) {
        dispatch(getUserFailure(err.message));
    }
}


export const logout = () =>(dispatch)=>{
    dispatch({type:LOGOUT,payload:null})
    localStorage.clear();
}
