import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import NoiDung from './NoiDung'

class App extends Component {
  // sử dụng với state
  constructor(props) {
    super(props);

    // khoi tao state
    this.state = {
      trangthai: "Khởi tạo",
      trangthai2: "Khởi tạo"
    };
  }


  componentWillMount() {
    // can thiepej truoc khi render
    console.log("componentWillMount đã chạy");

  }

  componentDidMount() {
    console.log("componentDidMount đã chạy");
  }


  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate đã chạy");
    return true;
  }
  // chay được


  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate đã chạy");

  }

  componentDidUpdate(nextProps, nextState) {
    console.log("componentDidUpdate đã chạy");
  }

  capNhatState = () => {
    this.setState({
      trangthai: "Cập nhật 1",
      trangthai2: "Cập nhật 2"
    })
  }

  render() {
    console.log("render đã chạy");
    console.log(this.state.trangthai);
    return (
      <div className="App">
        <NoiDung ten={this.state.trangthai2}></NoiDung>
        <button onClick={() => this.capNhatState()}>Click để update state</button>
      </div>
    );

  }

}

// class App extends Component {
//   render() {
//     return (
//        <div className="App">

//        </div>
//     );
//   }
// }



export default App;
