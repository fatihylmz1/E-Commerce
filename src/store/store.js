import { legacy_createStore as createStore } from 'redux';




function reducer() {
    return {
        title: 'Hello world! I\'m in the Redux store!',
    }
}




export const store = createStore(reducer);