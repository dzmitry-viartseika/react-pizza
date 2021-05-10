import { combineReducers } from 'redux';
import { filtersReducer } from "../reducers/filters";
import { cartReducer } from "../reducers/cart";
import { pizzasReducer } from "../reducers/pizzas";

const rootReducer = combineReducers({
    filter: filtersReducer,
    cart: cartReducer,
    pizza: pizzasReducer,
});

export default rootReducer;



