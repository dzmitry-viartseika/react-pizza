import {
    SET_SORT_BY,
} from '../../constants/types';



const initialState = {
    category: 0,
    sortBy: 'popular'
};

export const filtersReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORT_BY:
            return {
                ...state,
                sortBy: action.payload
            }
    }
    return state;
}
