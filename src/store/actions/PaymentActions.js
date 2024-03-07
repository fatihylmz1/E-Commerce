import axios from "axios";

export const GET_USER_CARD = "GET_USER_CARD";
export const UPDATE_CARD = "UPDATE_CARD";

export const getUserCard = (token) => async (dispatch) => {
    try {
        const response = await axios.get("https://workintech-fe-ecommerce.onrender.com/user/card", {
            headers: {
                Authorization: `${token}`
            }
        });
        dispatch({ type: GET_USER_CARD, payload: response.data });

    } catch (error) {
        console.error("Error getting user address", error);
    }
};

export const updateUserCard = (updatedData, token) => async (dispatch) => {
    try {
        const response = await axios.put(`https://workintech-fe-ecommerce.onrender.com/user/card`, updatedData, {
            headers: {
                Authorization: `${token}`
            }
        }
        );
        dispatch({ type: UPDATE_CARD, payload: response.data });
    } catch (error) {
        console.error("Error updating card", error);
    }
};