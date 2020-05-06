// import search field constant
import {CHANGE_SEARCH_FIELD} from './constants';

const initialState = {
    searchField: ''
}

// create reducer to effect the STATE only we search robots
// take state and action and do something
export const searchRobots = (state = initialState, action={}) => {
    // action.type comes from our list of actions!
    switch(action.type) {
        // Hey we just received an action called CHANGE_SEARCH_FIELD! Let's return the new state with whatever the user entered.
        case CHANGE_SEARCH_FIELD:
            return (Object.assign({}, state, {searchField: action.payload}))
        default:
            return state;
    }
}