import React, {Component} from 'react';

class ErrorBoundry extends Component {
    // to allow access to this.props in the constructor
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true});
    }


    render() {
        if (this.state.hasError) {
            return <h1> Oops! This is not good! </h1>
        } else {
            // anything under ErrorBoundry
            return this.props.children;
        }
    }
}

export default ErrorBoundry;