import { staticFolder } from "../utils/url-lib";
import AnaOlsonWebsite from "./AnaOlsonWebsite";
import BootstrapPortfolio from "./BootstrapPortfolio";
import CarPerformance from "./CarPerformance";
import Horiseon from "./Horiseon";
import ProjectAmericanHikingClub from "./ProjectAmericanHikingClub";
import FashionWebsite from "./FashionWebsite";
import Gym from "./Gym";


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