import { staticFolder } from "../utils/url-lib";
import ProjectAmericanHikingClub from "./ProjectAmericanHikingClub";
import ProjectBurger from "./ProjectBurger";

const PageProjects = (props) => {
  return (
    <div className="projectsPage">
      <div className="projects_container">

        <ProjectBurger />
        <ProjectAmericanHikingClub />
        <ProjectBurger />
        <ProjectBurger />

      </div>
    </div>
  );
};

export default PageProjects;