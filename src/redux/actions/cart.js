import {
    ADD_TO_CART,
    CLEAR_CART,
    REMOVE_CART_ITEM,
    MINUS_CART_ITEM,
    PLUS_CART_ITEM,
} from '../../constants/types'

export function addPizzaToCart(pizza) {
    return {
        type: ADD_TO_CART,
        payload: pizza
    }
}

export const clearCart = () => ({
        type: CLEAR_CART,
})

export const removeCartItem = (id) => ({
    type: REMOVE_CART_ITEM,
    payload: id,
})

export const plusItem = (id) => ({
    type: PLUS_CART_ITEM,
    payload: id,
})

export const minusItem = (id) => ({
    type: MINUS_CART_ITEM,
    payload: id,
})

