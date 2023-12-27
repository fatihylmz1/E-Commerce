const userInitial = {
    userName: null,
    userMail: null,
    userGravatar: null,
    token: null,
    isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
    error: null,
};



export const UserReducer = (state = userInitial, action) => {
    switch (action.type) {
        case "SET_USER":
            localStorage.setItem("userName", action.payload.name);
            return {
                ...state,
                userName: action.payload.name,
                userMail: action.payload.email,
                isLoggedIn: true,
            };
        case "LOGIN_SUCCESS":
            return {
                ...state,
                isLoggedIn: true,
                userName: action.payload.name,
                userMail: action.payload.email,
                token: action.payload.token,
            };
        case "LOGIN_FAILURE":
            return {
                ...state,
                error: action.payload,
                isLoggedIn: false,
            };
        default:
            return state;
    }
};