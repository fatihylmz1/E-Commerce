import { toast } from "react-toastify";

const cartInitial = {
    cart: [],
    payment: {},
    address: {},
};

export const ShoppingCartReducer = (state = cartInitial, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const existingProduct = state.cart.find(item => item.id === action.payload.id);

            if (existingProduct) {
                toast.error("You have already added this product to your cart!", {
                    position: "bottom-center",
                })
                return state;
            }

            return { ...state, cart: [...state.cart, action.payload] };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((item) => item.product.id !== action.payload),
            };
        case "SET_PAYMENT_INFO":
            return { ...state, payment: action.payload };
        case "SET_ADDRESS_INFO":
            return { ...state, address: action.payload };
        default:
            return state;
    }
};