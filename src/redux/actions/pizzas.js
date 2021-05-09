import {
   SET_PIZZAS,
} from '../../constants/types'

export function setPizzas(list) {
    console.log('list', list)
    return {
        type: SET_PIZZAS,
        payload: list
    }
}
