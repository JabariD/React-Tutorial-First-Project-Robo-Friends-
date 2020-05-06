// import search field constant
import {CHANGE_SEARCH_FIELD} from './constants';

// create an action
export const setSearchField = (text) => ({
    // this is the action
    type: CHANGE_SEARCH_FIELD,
    // common name that is just meant that we are sending this to the reducer
    payload: text
});