const ProjectDetails = (props) => {
  // console.log(props.match.params.id);
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title - {id}</span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, assumenda nemo nulla suscipit exercitationem reiciendis veritatis fugiat. Adipisci quidem quibusdam blanditiis magnam itaque odit nam voluptates vel velit hic? Quis!</p>
        </div>

        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by NTH</div>
          <div>12 september, 10:44 am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails;