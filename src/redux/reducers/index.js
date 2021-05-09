import { combineReducers } from 'redux';
import { filtersReducers } from "../reducers/filters";
import { cartReducer } from "../reducers/cart";
import { pizzasReducer } from "../reducers/pizzas";

const rootReducer = combineReducers({
    filters: filtersReducers,
    cart: cartReducer,
    pizza: pizzasReducer,
});

export default rootReducer;



