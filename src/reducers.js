// import search field constant and robot requests
import {CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED} from './constants';

const initialStateSearch = {
    searchField: ''
}

// create reducer to effect the STATE only we search robots
// take state and action and do something
export const searchRobots = (state = initialStateSearch, action={}) => {
    // action.type comes from our list of actions!
    switch(action.type) {
        // Hey we just received an action called CHANGE_SEARCH_FIELD! Let's return the new state with whatever the user entered.
        case CHANGE_SEARCH_FIELD:
            return (Object.assign({}, state, {searchField: action.payload}))
        default:
            return state;
    }
}

const initialStateRobotRequest = {
    isPending: false,
    robots: [],
    error: ''
}

// create reducer to try and update the state of robots
export const requestRobots = (state = initialStateRobotRequest, action={}) => {
    // 3 possible states
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, {isPending: true})
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {robots: action.payload, isPending: false})
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false})
        default: 
            return state;
    }
}