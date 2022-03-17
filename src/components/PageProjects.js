import { staticFolder } from "../utils/url-lib";
import ProjectBurger from "./ProjectBurger";

const PageProjects = (props) => {
  return (
    <div className="projectsPage">
      <div className="projects_container">

        <ProjectBurger />
        <ProjectBurger />
        <ProjectBurger />
        <ProjectBurger />

      </div>
    </div>
  );
};

export default PageProjects;