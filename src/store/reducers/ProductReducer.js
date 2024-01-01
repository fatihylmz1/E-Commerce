export const FETCH_STATES = {
    notFetched: "NOT_FETCHED",
    fetching: "FETHCING",
    fetched: "FETCHED",
    failed: "FAILED",
};

const InitialValue = {
    productList: [],
    totalProductCount: 0,
    pageCount: 1,
    activePage: 1,
    fetchState: "NOT_FETCHED",
};
export const ProductReducer = (state = InitialValue, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return { ...state, productList: action.payload };
        default:
            return state;
    }
};