import axios from "axios";

export const setRoles = (roles) => ({
    type: "SET_ROLES",
    payload: roles,
});

export const setCategories = (categories) => ({
    type: "SET_CATEGORIES",
    payload: categories,
});

export const setTheme = (theme) => ({
    type: "SET_THEME",
    payload: theme,
});

export const setLanguage = (language) => ({
    type: "SET_LANGUAGE",
    payload: language,
});

export const fetchCategories = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("https://workintech-fe-ecommerce.onrender.com/categories");
            dispatch(setCategories(response.data));
            return response;
        } catch (error) {
            console.error('Error fetching categories:', error);
            throw error;
        }
    };
};