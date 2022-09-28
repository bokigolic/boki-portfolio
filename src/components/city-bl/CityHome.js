

import { staticFolder } from "../../utils/url-lib";
import ProjectItem from "../ProjectItem";

const CityHome = () => {

  return (
    <ProjectItem>

      <div className="project-title">My experience as an entrepreneur</div>
      <div className="project-overview">
        <div className="right">
          <div className="project-img-container">
            <img className='image-city' src={staticFolder() + "/imgcity/naslovna.png"} alt="city magazine" />
          </div>

        </div>
        <div className="left">

          <div className="project-description">
            <h3 className="project-subtitle">Description: City Magazine</h3><br/>
            <p className="project-paragraph"><b>Front page of CityBL magazine</b><br/><br/>
              This magazine is a periodical publication, published on a regular schedule monthly, containing a variety of content. They are generally financed by advertisin<br/>
              City Bl magazine is free and available in all attractive locations.
              Our team made an effort to deliver it where you can find it, read it and enjoy it.<br/>
          </p>
          </div>
        </div>
      </div>

    </ ProjectItem>
  );
};

export default CityHome;

