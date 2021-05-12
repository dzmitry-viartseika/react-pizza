import {
    ADD_TO_CART,
} from '../../constants/types'

export function addPizzaToCart(pizza) {
    return {
        type: ADD_TO_CART,
        payload: pizza
    }
}

