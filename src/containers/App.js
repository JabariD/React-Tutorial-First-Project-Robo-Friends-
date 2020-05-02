import React, {Component} from 'react';

// List of cards
import CardList from '../components/CardList';

// SearchBox functionality
import SearchBox from '../components/SearchBox';

// Scroll functionality for CardList
import Scroll from '../components/Scroll';

// Import font file
import './App.css';

// what our state should have
// const state = {
//     robots: robots
//     searchfield: ''
// };


class App extends Component {
    // declares our state
    constructor () {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        };
    }

    // after this component mounted AND is rendered run this function
    componentDidMount() {
        // fetches this 
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            // convert the response to json
            return response.json();
        }).then(users => {
            this.setState({robots: users});
        })
    }

    // random function name, but we just want to do this ON AN ACTION
    onSearchChange = (event) => {
        //console.log(event.target.value);
        this.setState({searchfield: event.target.value});
    }

    // render robots dynamically based on passed in state
    render() {
        const {robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        // if getting the response back from the API took a really long time
        if (!robots.length) {
            return <h1 className='tc title'>Loading...</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f2 title'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;