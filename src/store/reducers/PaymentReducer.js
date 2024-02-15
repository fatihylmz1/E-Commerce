import {
    GET_USER_CARD,
} from "../actions/PaymentActions";

export const CardData = [];

const PaymentReducer = (state = [], action) => {
    switch (action.type) {
        case GET_USER_CARD:
            return action.payload;
        // [...state, ...action.payload];
        default:
            return state;
    }
};

export default PaymentReducer;