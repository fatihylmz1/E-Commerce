import axios from "axios";
import { useSelector } from "react-redux";

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
export const setFilterProducts = (filter) => ({
    type: "SET_FILTER_PRODUCTS",
    payload: filter,
});
export const setCategoryProducts = (category) => ({
    type: "SET_CATEGORY_PRODUCTS",
    payload: category,
});
export const setSortProducts = (sort) => ({
    type: "SET_SORT_PRODUCTS",
    payload: sort,
});

export const fetchProducts = (filter, category, sort) => {
    return async (dispatch) => {
        try {

            const queryString = new URLSearchParams({
                filter: filter || '',
                category: category || "",
                sort: sort || "",
            }).toString();


            const response = await axios.get(`https://workintech-fe-ecommerce.onrender.com/products?${queryString}`);
            console.log("RESPOOONNSE>>>", response)
            const data = response.data;
            dispatch(setProductList(response.data.products));
            return response.data.products;


            // if (filterProducts === undefined || filterProducts.length === 0) {
            //     dispatch(setProductList(response.data.products));
            //     return response.data.products;
            // } else {
            //     dispatch(setProductList(filterProducts))
            //     return filterProducts;
            // }

            // const filterProducts = data.products?.filter((obje) => obje.description.toLowerCase().includes(filter));
            // console.log("FILTERED>>>", filterProducts);
            // console.log("FILTEREDLENGTH>>>", filterProducts.length);
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    };
};