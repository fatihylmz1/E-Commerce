import {
    ADD_USER_ADDRESS,
    GET_USER_ADDRESS,
    UPDATE_USER_ADDRESS,
} from "../actions/OrderAction";

export const addressData = [];

const addressReducer = (state = [], action) => {
    switch (action.type) {
        case GET_USER_ADDRESS:
            return action.payload;
        // [...state, ...action.payload];

        case ADD_USER_ADDRESS:
            return {
                ...state,
                address: action.payload,
            };
        case UPDATE_USER_ADDRESS:
            return {
                ...state,
                address: state.address.map((address) =>
                    address.id === action.payload.id ? action.payload : address
                ),
            };
        default:
            return state;
    }
};

export default addressReducer;