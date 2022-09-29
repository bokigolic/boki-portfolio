import { staticFolder } from "../utils/url-lib";
import AnaOlsonWebsite from "../components/projects/AnaOlsonWebsite";
import BootstrapPortfolio from "../components/projects/BootstrapPortfolio";
import CarPerformance from "../components/projects/CarPerformance";
import Horiseon from "../components/projects/Horiseon";
import ProjectAmericanHikingClub from "../components/projects/ProjectAmericanHikingClub";
import FashionWebsite from "../components/projects/FashionWebsite";
import Gym from "../components/projects/Gym";

const PageProjects = (props) => {
  return (
    <div className="projectsPage">
      <div className="projects_container">
        <Horiseon />
        <Gym />
        <ProjectAmericanHikingClub />
        <AnaOlsonWebsite />
        <FashionWebsite />
        <BootstrapPortfolio />
        <CarPerformance />
      </div>
    </div>
  );
};
export default PageProjects;