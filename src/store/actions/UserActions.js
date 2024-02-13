import axios from "axios";

export const setUser = (userInfo) => ({
    type: "SET_USER",
    payload: userInfo,
});
export const setToken = (token) => ({
    type: "SET_TOKEN",
    payload: token,
});
export const loginSuccess = (userInfo) => ({
    type: "LOGIN_SUCCESS",
    payload: userInfo,
});
export const loginError = (state, action) => ({
    type: "LOG_IN_ERROR",
    payload: action.payload,
});



export const loginUser = (loginInfo) => {
    return (dispatch) => {
        return axios.post("https://workintech-fe-ecommerce.onrender.com/login", loginInfo)
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("isloggedIn", true);
                dispatch(setToken(response.data.token));
                dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
                return response;
            })
            .catch((error) => {
                dispatch({ type: "LOGIN_FAILURE", payload: error });
                throw error;
            });
    };
};