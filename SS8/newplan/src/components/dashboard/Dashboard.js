import { Component } from "react";
import ProjectList from "../project/ProjectList";
import Notifications from "./Notifications";
import { connect } from "react-redux"

class Dashboard extends Component {
  render() {
    // console.log(this.props.projects);
    const { projects } = this.props // desubstring: viết gọn lại cú pháp truy vấn.
    console.log(projects);
    return (
      <div className="dashboard container">
        <div className="row">


          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>

          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>


        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}

export default connect(mapStateToProps)(Dashboard);