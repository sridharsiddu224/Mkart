import { CART_ADD_ITEM } from "../constants/cartConstant";

export const cartReducers = (state = { cartItems : [] }, action) =>{

    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            // find itms
            const existItem = state.cartItems.find((x) => x.product === item.product);
            if (existItem) {
                return {
                    // replace the items
                    ...state,
                    cartItems : state.cartItems.map((x) => 
                    x.product === existItem.product ? 
                    item : x),
                };
            } else { //if items are same 
                return {
                    ...state, cartItems : [...state.cartItems, item]
                }
            }    
        default:
            return state;
    }
}

