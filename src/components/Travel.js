

import { staticFolder } from "../utils/url-lib";
import ProjectItem from "./ProjectItem";

const Travel = () => {

  return (
    <ProjectItem>

      <div className="project-title">Travel</div>
      <div className="project-overview">
        <div className="right">
          <div className="project-img-container">
            <img className='image-city' src={staticFolder() + "/imgcity/travel.jpg"} alt="city magazine" />
          </div>

        </div>
        <div className="left">

          <div className="project-description">
            <h3 className="project-subtitle">Description: Travel</h3>
            <p className="project-paragraph"><br /><br />
              Through the travel section, we present places to which you must go. We bring the smallest details, conversation with people, their experiences and opinions
              Through each new City BL magazine, all destinations become irresistible</p>
          </div>
        </div>
      </div>

    </ ProjectItem>
  );
};

export default Travel;

