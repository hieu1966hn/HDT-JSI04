import { Component } from "react";
import { createProject } from "../../store/actions/projectActions";
import { connect } from "react-redux"

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // tranhs su kien reload cua trinhf duyet khi submit form
    this.props.createProject(this.state)

  }


  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit} >
          <h5 className="greytext text-darken-3"></h5>

          <div className="input-field">
            <input type="text" id="title" onChange={this.handleChange} />
            <label htmlFor="title">Project Citle</label>
          </div>

          <div className="input-field">
            <textarea className="materialize-textarea" id="content" onChange={this.handleChange} ></textarea>
            <label htmlFor="content">Project Content</label>
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>

        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(null, mapDispatchToProps)(CreateProject)