import { CHOOSEN_ADDRESS } from "../actions/OrderAction";

export const choosenAddress = [];

const ChoosenReducer = (state = [], action) => {
    switch (action.type) {
        case CHOOSEN_ADDRESS:
            return {
                ...state,
                address: action.payload,
            };

        default:
            return state;
    }
};

export default ChoosenReducer;