import ProjectSummary from "./ProjectSummary"


const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects && projects.map(project => {
        return (
          <ProjectSummary project={project} key={project.id}></ProjectSummary>
        )
      })}

      {/* 
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">Project title</span>
          <p>Posted by Hieu PC</p>
          <p>3rd Semtember, 11h58 am</p>
        </div>
      </div>


      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">Project title</span>
          <p>Posted by Hieu PC</p>
          <p>3rd Semtember, 11h58 am</p>
        </div>
      </div>


      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">Project title</span>
          <p>Posted by Hieu PC</p>
          <p>3rd Semtember, 11h58 am</p>
        </div>
      </div> */}
      {/* <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary /> */}

    </div>
  )
}

export default ProjectList