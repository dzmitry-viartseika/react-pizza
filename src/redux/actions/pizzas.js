import {
   SET_PIZZAS,
} from '../../constants/types';
import pizzaApi from "../../api/pizzaApi/api";

// export async function fetchPizzas(dispatch) {
//     try {
//         const { data } = await pizzaApi.getPizzasList();
//         dispatch(setPizzas(data));
//     } catch (e) {
//         console.error(e)
//     }
// }

export const fetchPizzas = () => async (dispatch) => {
    try {
        const { data } = await pizzaApi.getPizzasList();
        dispatch(setPizzas(data));
    } catch (e) {
        console.error(e)
    }
}

export function setPizzas(list) {
    return {
        type: SET_PIZZAS,
        payload: list
    }
}
