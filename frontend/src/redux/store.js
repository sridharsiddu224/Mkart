import { combineReducers, createStore } from 'redux';
import { compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { cartReducers } from '../reducers/cartReducers';
import { productDetailsReducer, productlistReducer } from '../reducers/productReducers';


const initialState = {
    cart:{
        cartItems : localStorage.getItem("cardItems") ? JSON.parse(localStorage.getItem("cardItems")) : []
    }
};
const reducer = combineReducers({
    productList: productlistReducer,
    productDetails: productDetailsReducer,
    cart: cartReducers,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore   (
        reducer,
        initialState,
        composeEnhancer(applyMiddleware(thunk))
        );
export default store;
