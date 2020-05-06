// import search field constant and robot requests
import {CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED} from './constants';

// create an action
export const setSearchField = (text) => ({
    // this is the action
    type: CHANGE_SEARCH_FIELD,
    // common name that is just meant that we are sending this to the reducer
    payload: text
});


// create an action
/* 
We call this action, fetch the users, receive the users, then we either have success or failed
*/
export const requestRobots = () => (dispatch) => {
    dispatch({type: REQUEST_ROBOTS_PENDING});
    // async
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
    .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
}
