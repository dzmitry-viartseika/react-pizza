import {
    ADD_TO_CART,
    CLEAR_CART,
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

