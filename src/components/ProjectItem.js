const ProjectItem = (props) => {
  return (
    <div className="container" id="burger">
      <div className="item" >
        <div className="project">
          <div className="project-container">

            {props.children}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;