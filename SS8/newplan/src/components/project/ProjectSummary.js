// cut toàn bộ nội dung của phần project list.js => chuyển vào trong này

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by Hieu PC</p>
        <p>3rd Semtember, 11h58 am</p>
      </div>
    </div>
  )
}

export default ProjectSummary;