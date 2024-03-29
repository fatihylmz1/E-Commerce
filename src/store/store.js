import { applyMiddleware, combineReducers } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';
import { GlobalReducer } from "./reducers/GlobalReducer";
import { ProductReducer } from './reducers/ProductReducer';
import { ShoppingCartReducer } from './reducers/ShoppingCardReducer';
import StoreReducer from './reducers/StoreReducer';
import { UserReducer } from './reducers/UserReducer';
import addressReducer from './reducers/OrderReducer';
import PaymentReducer from './reducers/PaymentReducer';
import ChoosenReducer from './reducers/ChoosenReducer';




export const reducers = combineReducers({
    global: GlobalReducer,
    product: ProductReducer,
    shoppingcard: ShoppingCartReducer,
    store: StoreReducer,
    user: UserReducer,
    addressReducer: addressReducer,
    payment: PaymentReducer,
    choose: ChoosenReducer,

});




export const store = createStore(reducers, applyMiddleware(thunk, logger));