const SET_STORE = "SET_STORE";

const StoreReducer = (state = null, action) => {
    switch (action.type) {
        case SET_STORE:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};

export default StoreReducer;