import {
    GET_USER_CARD, UPDATE_CARD,
} from "../actions/PaymentActions";

export const CardData = [];

const PaymentReducer = (state = [], action) => {
    switch (action.type) {
        case GET_USER_CARD:
            return action.payload;
        case UPDATE_CARD:
            return {
                ...state,
                card: state.card.map((card) =>
                    card.id === action.payload.id ? action.payload : card
                ),
            };
        default:
            return state;
    }
};

export default PaymentReducer;