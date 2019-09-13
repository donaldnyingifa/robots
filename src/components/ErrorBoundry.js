import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(){
        super();
        this.state = {
            hasError : false
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError : true})
    }

    render() {
        if (this.state.HasError) {
            return <h1> Oops something went wrong</h1>
        } else {
            return this.props.children
        }
        
    }
}

export default ErrorBoundry;