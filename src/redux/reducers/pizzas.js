import {
    SET_PIZZAS,
} from '../../constants/types';



const initialState = {
    pizzas: [],
    isLoading: false
};

export const pizzasReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PIZZAS:
            console.log('action.payload', action.payload)
            return {
                ...state,
                pizzas:  action.payload
            }
    }
    return state;
}
