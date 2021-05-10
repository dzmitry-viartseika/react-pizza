import {
    SET_LOADER,
    SET_PIZZAS,
} from '../../constants/types';

const initialState = {
    pizzas: [],
    isLoaded: false
};

export const pizzasReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PIZZAS:
            return {
                ...state,
                pizzas:  action.payload,
                isLoaded: true
            }
        case SET_LOADER:
            return {
                ...state,
                isLoaded: action.payload
            }
    }
    return state;
}
