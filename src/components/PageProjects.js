import { staticFolder } from "../utils/url-lib";
import AnaOlsonWebsite from "./AnaOlsonWebsite";
import Horiseon from "./Horiseon";
import ProjectAmericanHikingClub from "./ProjectAmericanHikingClub";
import ProjectBurger from "./ProjectBurger";

const PageProjects = (props) => {
  return (
    <div className="projectsPage">
      <div className="projects_container">

        <Horiseon />
        <ProjectAmericanHikingClub />
        <AnaOlsonWebsite />
        <ProjectBurger />

      </div>
    </div>
  );
};

export default PageProjects;