import axios from "axios";

export const FETCH_STATES = {
    notFetched: "NOT_FETCHED",
    fetching: "FETCHING",
    fethced: "FETCHED",
    failed: "FAILED",
};

export const setProductList = (productList) => ({
    type: "SET_PRODUCTS",
    payload: productList,
});

export const setTotalProductCount = (count) => ({
    type: "SET_TOTAL_PRODUCT_COUNT",
    payload: count,
});

export const setPageCount = (count) => ({
    type: "SET_PAGE_COUNT",
    payload: count,
});

export const setActivePage = (page) => ({
    type: "SET_ACTIVE_PAGE",
    payload: page,
});

export const setFetchState = (fetchState) => ({
    type: "SET_FETCH_STATE",
    payload: fetchState,
});


export const fetchProducts = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("https://workintech-fe-ecommerce.onrender.com/products");
            dispatch(setProductList(response.data));
            return response;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    };
};