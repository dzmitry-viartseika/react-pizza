import {SET_TOTAL_PRICE, SET_TOTAL_COUNT, ADD_TO_CART} from "../../constants/types";

const initialState = {
    totalPrice: 0,
    totalCount: 0,
    items: {}
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: action.payload
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.payload
            }
        case ADD_TO_CART:
            return {
                ...state,
                [action.payload.id]: [
                    ...state.items,
                    action.payload
                ]
            }
    }
    return state;
}

export { cartReducer };
