import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  // sử dụng với state
  constructor(props) {
    super(props);

    // khoi tao state
    this.state = {
      trangthai: "Khởi tạo",
    };
  }


  componentWillMount() {
    // can thiepej truoc khi render
    console.log("componentWillMount đã chạy");

  }

  componentDidMount(){
    console.log("componentDidMount đã chạy");
  }


  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate đã chạy");
  }

  componentWillUpdate(nextProps, nextState){
    console.log("componentWillUpdate đã chạy");
  }

  componentDidUpdate(nextProps, nextState){
    console.log("componentDidUpdate đã chạy");
  }

  capNhatState= ()=>{

  }

  render() {
    console.log("render đã chạy");
    return (
      <div className="App">
        <button onClick={()=>this.capNhatState()}>Click</button>
      </div>
    );

  }

}

export default App;
