import { Component } from "react";


// lam trang dang nhap
class SignUp extends Component {
  state = {
    email: "",
    password: '',
    firstName: "",
    lastName: ''
  }
  // khai bao bien state chay ngam ben trong react


  // khoi tao phuong thuc hanldeChange
  handleChange = (e) => {
    this.setState = ({
      [e.target.id]: e.target.value
    })
  }

  // khoi tao phuong thuc handleSubmit
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>


          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0" type="submit">Sign Up</button>
          </div>
        </form>

      </div>
    )
  }
}

export default SignUp;