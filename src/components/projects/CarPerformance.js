

import { staticFolder } from "../../utils/url-lib";
import ProjectItem from "../ProjectItem";

const CarPerformance = () => {

  return (
    <ProjectItem>

      <div className="project-title">Car Performance</div>
      <div className="project-overview"><div className="left">
        <div className="project-img-container">
          <img src={staticFolder() + "/img/car-performance.jpg"} alt="car-performance" />
        </div>
        <div className="project-buttons">
          <a target="_blank" href="https://github.com/bokigolic/car-performance" rel="noreferrer">GitHub</a>
          <a target="_blank" href="https://neon-flan-9d1bef.netlify.app" rel="noreferrer">Live View</a>
        </div>
      </div>
        <div className="right">
          <div className="project-tools">
            <h3 className="project-subtitle">Tools:</h3>
            <ul className="project-tools__items">
              <li className="project-tools__item">HTML</li>
              <li className="project-tools__item">CSS</li>
              <li className="project-tools__item">Bootstrap</li> 
              <li className="project-tools__item">Java Script</li> 

              </ul>
          </div>
          <div className="project-description">
            <h3 className="project-subtitle">Description:</h3>
            <p className="project-paragraph">Built a small application that shows the performance of the car! We used java script and css shortcuts to enable the visual effect </p>
          </div>
        </div>
      </div>

    </ ProjectItem>
  );
};

export default CarPerformance;

