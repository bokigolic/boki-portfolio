import { staticFolder } from "../utils/url-lib";
import ProjectItem from "./ProjectItem";


const FashionSite = (props) => {
  return (
    <ProjectItem>

      <div className="project-title" id="americanhikingclub">Fashion Site</div>
      <div className="project-overview"><div className="left">
        <div className="project-img-container">
          <img src={staticFolder() + "/img/fashion-site.jpg"} alt="" />
        </div>
        <div className="project-buttons">
          <a target="_blank" href="https://github.com/bokigolic/project3" rel="noreferrer">GitHub</a>
          <a target="_blank" href="http://american-hiking-club.herokuapp.com/" rel="noreferrer">Live View</a>
        </div>
      </div>
        <div className="right">
          <div className="project-tools">
            <h3 className="project-subtitle">Tools:</h3>
            <ul className="project-tools__items">
              <li className="project-tools__item">HTML</li>
              <li className="project-tools__item">CSS</li>
            


            </ul>
          </div>
          <div className="project-description">
            <h3 className="project-subtitle">Description:</h3>
            <p className="project-paragraph">This is an application that has the ability to register users. Once the user is registered, it is necessary to log in. The logged in user has the ability to add or delete the tour, and to modify it. Also, there is the possibility of leaving comments and revews.</p>
          </div>
        </div>
      </div>

    </ ProjectItem>
  );
};

export default FashionSite;