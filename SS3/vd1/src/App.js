import logo from './logo.svg';
import './App.css';
import React, { Component } from "react"

function One(props) {
  return (
    <h1>{props.title}</h1>
  )
}

//C2: Định nghĩa ra 1 thẻ mới => sau đó nhúng vào App là đc 
let Two = function () {
  return <h1>This is number Two</h1>
}


// C3:
let Three = () => {
  return <h1>This is number three</h1>
}

// C4: class component: Tao ra 1 thẻ (component) trong HTML
class Four extends Component {
  render() {
    return (
      <div>
        <h1>This is Number four</h1>
      </div>
    );
  }
}


function ImageCard1(props) {
  return (
    <div className="card text-left">
      <img className="card-img-top" src={props.src} alt="" />
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">{props.body}</p>
      </div>
    </div>
  )

}

class ImageCard2 extends Component {
  // trong hàm khởi tạo constructor()của clas đã có sẵn 1 biến object là props rồi 
  // nên ko cần phải truyền thêm vào nữa
  render() {
    return (
      <div className="card text-left">
        <img className="card-img-top" src={this.props.src} alt="" />
        <div className="card-body">
          <h4 className="card-title">{this.props.title}</h4>
          <p className="card-text">{this.props.body}</p>
        </div>
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      {/* <One />
      <Two />
      <Three/>
      <Four/> */}

      {/* <One title="This is Number One Props.title" /> */}
      <ImageCard1
        src="data:image/jpeg;base64,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"
        title="This is first ImageCard"
        body="content of first ImageCard"
      />
      <ImageCard2
        src="https://wallpaperaccess.com/full/5400423.png"
        title="This is second ImageCard with class"
        body="content of second ImageCard with class"
      />
    </div>
  );
}

export default App;
