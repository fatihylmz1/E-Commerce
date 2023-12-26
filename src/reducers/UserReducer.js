export const UserReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, roles: action.payload };
        default:
            return state;
    }
};