import { CHANGE_SEARCH_FIELD } from './constants.js'

export const setSearchField = (text) => {
    return {
        type    : CHANGE_SEARCH_FIELD, // Capitalized for const
        payload : text //Function Input
    }
}