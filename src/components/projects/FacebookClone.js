import { staticFolder } from "../../utils/url-lib";
import ProjectItem from "../ProjectItem";


const FacebookClone = (props) => {
  return (
    <ProjectItem>

      <div className="project-title" id="gym">Facebook Clone</div>
      <div className="project-overview"><div className="left">
        <div className="project-img-container">
          <img src={staticFolder() + "/img/facebook-clone.jpg"} alt="" />
        </div>
        <div className="project-buttons">
          <a target="_blank" href="https://github.com/bokigolic/social-app" rel="noreferrer">GitHub</a>
          <a target="_blank" href="http://socialapp.bojangolic.com/" rel="noreferrer">Live View</a>
        </div>
      </div>
        <div className="right">
          <div className="project-tools">
            <h3 className="project-subtitle">Tools:</h3>
            <ul className="project-tools__items">
              <li className="project-tools__item">HTML</li>
              <li className="project-tools__item">CSS</li>
              <li className="project-tools__item">JavaScript</li>
              <li className="project-tools__item">ReactJS</li>
              <li className="project-tools__item">React Router </li>
              <li className="project-tools__item">API</li>
              <li className="project-tools__item">Reack Hooks</li>


            </ul>
          </div>
          <div className="project-description">
            <h3 className="project-subtitle">Description:</h3>
            <p className="project-paragraph">A social media app designed to mimic Facebook's core features, such as the ability to create and manage posts, and upload images. I built this project to learn advanced concepts in React
              <b><br />
                Creating a Beautiful User Interface using the React</b></p>
          </div>
        </div>
      </div>
    </ ProjectItem>
  );
};

export default FacebookClone;