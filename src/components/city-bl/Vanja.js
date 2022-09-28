

import { staticFolder } from "../../utils/url-lib";
import ProjectItem from "../ProjectItem";

const Vanja = () => {

  return (
    <ProjectItem>

      <div className="project-title">Interview</div>
      <div className="project-overview">
        <div className="right">
          <div className="project-img-container">
            <img className='image-city' src={staticFolder() + "/imgcity/vanja.jpg"} alt="city magazine" />
          </div>

        </div>
        <div className="left">

          <div className="project-description">
            <h3 className="project-subtitle">Description: Interview</h3>
            <p className="project-paragraph"><br /><br />
              Through each new City BL magazine, we try to present to our readers people who represent our city and contribute to the development of the city.
              <br/><br/>Thus, through the Interview section, we bring new or well-known faces who deserve to be seen and whose work and efforts deserve to be known.
              <br/> Through this interview, we presented students, writers, musicians, athletes, actors as well as many others who are in some way "Ambassadors of our city". </p>
          </div>
        </div>
      </div>

    </ ProjectItem>
  );
};

export default Vanja;

