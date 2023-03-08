import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstant";
import  Axios  from "axios"

export const addToCard = (productId, qtyInUrl) => async (dispatch, getState) => {
    const { data } = await Axios.get(`/app/products/${productId}`);
    
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name: data.name,
            Image: data.Image,
            price: data.price,
            countInStock: data.countInStock,
            product: data._id,
            qtyInUrl,
        }
    });
    localStorage.setItem('cardItems',JSON.stringify(getState().cart.cartItems));
}

export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: productId
    });
    localStorage.setItem('cardItems',JSON.stringify(getState().cart.cartItems));
}



