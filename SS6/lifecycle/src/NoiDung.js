import React, { Component } from 'react';

class NoiDung extends Component {

    componentWillReceiveProps(nextProps, nextState) {
        console.log("componentWillReceiveProps của NoiDung.js");
        console.log(this.props.ten);
        console.log(nextProps);
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate của NoiDung.js");
        return true;
    }
    // chay được


    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate của NoiDung.js");

    }

    componentDidUpdate(nextProps, nextState) {
        console.log("componentDidUpdate của NoiDung.js");
    }


    render() {
        
        return (
            <div>
                <h4>{this.props.ten} Xin chào mọi người</h4>
            </div>
        )
    }
}
export default NoiDung;