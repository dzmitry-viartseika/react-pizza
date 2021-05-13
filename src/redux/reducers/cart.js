import {SET_TOTAL_PRICE, SET_TOTAL_COUNT, ADD_TO_CART, CLEAR_CART} from "../../constants/types";

const initialState = {
    totalPrice: 0,
    totalCount: 0,
    items: {}
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: action.payload
            }
        case CLEAR_CART:
            return {
                items: {},
                totalPrice: 0,
                totalCount: 0,
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.payload
            }
        case ADD_TO_CART:
            const currentPizzaItems = !state.items[action.payload.id] ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload]
            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems),
                }
            }
            const items = Object.values(newItems).map(obj => obj.items)
            const allPizzas = [].concat.apply([], items);
            const totalPrice = getTotalPrice(allPizzas);
            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice,
            }
    }
    return state;
}

export { cartReducer };
