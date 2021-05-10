import {
    SET_LOADER,
    SET_PIZZAS,
} from '../../constants/types';
import pizzaApi from "../../api/pizzaApi/api";

export const fetchPizzas = (sortBy, category) => async (dispatch) => {
    try {
        dispatch({
            type: SET_LOADER,
            payload: false
        })
        const { data } = await pizzaApi.getPizzasList(sortBy, category);
        dispatch(setPizzas(data));
    } catch (e) {
        console.error(e)
    }
}

export function setLoader(data) {
    return {
        type: SET_LOADER,
        payload: data
    }
}

export function setPizzas(list) {
    return {
        type: SET_PIZZAS,
        payload: list
    }
}
