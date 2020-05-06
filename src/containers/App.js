import React, {Component} from 'react';
// Import connect
import { connect } from 'react-redux';

// List of cards
import CardList from '../components/CardList';

// SearchBox functionality
import SearchBox from '../components/SearchBox';

// Scroll functionality for CardList
import Scroll from '../components/Scroll';

// Import font file
import './App.css';

// catch errors from the cards
import ErrorBoundry from '../components/ErrorBoundry';

/********/

// import Actions
import {setSearchField, requestRobots} from '../actions';

const mapStateToProps = (state) => {
    return {
        // The searchField we are returning will come from our reducer.
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

// this dispatch triggers the action to go into the reducer
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

// what our state should have
// const state = {
//     robots: robots
//     searchfield: ''
// };


class App extends Component {
    // after this component mounted AND is rendered run this function
    componentDidMount() {
        // fetches this 
        this.props.onRequestRobots();
    }

    // render robots dynamically based on passed in state
    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        // if getting the response back from the API took a really long time
        if (isPending) {
            return <h1 className='tc title'>Loading...</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f2 title'>RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }
}

// connect it: it's a higher function so it RETURNS another function
// https://scotch.io/courses/5-essential-react-concepts-to-know-before-learning-redux/higher-order-components-in-react
// Connect RUNS and the returns another function which then runs with the App parameter.
// App now knows there's a redux store somewhere!
export default connect(mapStateToProps, mapDispatchToProps)(App);