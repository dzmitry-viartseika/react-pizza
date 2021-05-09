import {
    SET_SORT_BY,
    SET_CATEGORY,
} from '../../constants/types'

export function setSortBy(type) {
    return {
        type: SET_SORT_BY,
        payload: type
    }
}

export function setCategory(catIndex) {
    return {
        type: SET_CATEGORY,
        payload: catIndex
    }
}
