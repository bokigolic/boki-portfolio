

import { staticFolder } from "../utils/url-lib";
import ProjectItem from "./ProjectItem";

const Contents = () => {

  return (
    <ProjectItem>

      <div className="project-title">Table of Contents</div>
      <div className="project-overview">
        <div className="right">
          <div className="project-img-container">
            <img className='image-city' src={staticFolder() + "/imgcity/sadrzaj.jpg"} alt="city magazine" />
          </div>

        </div>
        <div className="left">

          <div className="project-description">
            <h3 className="project-subtitle">Description: Table of Contetnts</h3>
            <p className="project-paragraph">The content of the magazine is presented through concise titles
              advertisements are arranged in such a way that they keep the attention of the readers.
              Through illustrated articles, we bring a lot of information to our readers <br/><br/>
              4. What is seen in the cinema<br/>
              6. The pulse of the city<br/>
              8. Banja Luka through time<br/>
              10. Interview<br/>
              16. Education<br/>
              18. Health<br/>
              20. Fitness<br/>
              22. Corner for parents<br/>
              24. Home and Interior<br/>
              26. Gastro<br/>
              28. Travel<br/>
              30 Hi Tech </p>
          </div>
        </div>
      </div>

    </ ProjectItem>
  );
};

export default Contents;

