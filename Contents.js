

import { staticFolder } from "../utils/url-lib";
import ProjectItem from "./ProjectItem";

const Contents = () => {

  return (
    <ProjectItem>

      <div className="project-title">Hotel Talija</div>
      <div className="project-overview">
        <div className="right">
          <div className="project-img-container">
            <img className='image-city' src={staticFolder() + "/imgcity/sadrzaj.png"} alt="talija" />
          </div>

        </div>
        <div className="left">

          <div className="project-description">
            <h3 className="project-subtitle">Description: Table of Contents <br/></h3>
            <p className="project-paragraph">Newspaper advertising has long been an effective way to market a business, with this being driven by how wide of an audience many publications have. In terms of local papers with a small readership, companies will be able to target a specific group of people interested in their products or services. <br/>
            <br/>
            One of the primary benefits of advertising in a newspaper is that most readers will be much more engaged with the publication, which is a significant advantage compared to television or digital marketing.</p>
          </div>
        </div>
      </div>

    </ ProjectItem>
  );
};

export default Contents;