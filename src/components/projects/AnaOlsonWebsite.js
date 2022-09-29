import { staticFolder } from "../../utils/url-lib";
import ProjectItem from "../ProjectItem";



const AnaOlsonWebsite = (props) => {
  return (
    <ProjectItem>

      <div className="project-title" id="anaolsonwebsite">Ana Olson Website</div>
      <div className="project-overview"><div className="left">
        <div className="project-img-container">
          <img src={staticFolder() + "/img/anaolson.jpg"} alt="" />
        </div>
        <div className="project-buttons">
          <a target="_blank" href="https://github.com/bokigolic/AnnaOlsonWebsite" rel="noreferrer">GitHub</a>
          <a target="_blank" href="https://bokigolic.github.io/AnnaOlsonWebsite/" rel="noreferrer">Live View</a>
        </div>
      </div>
        <div className="right">
          <div className="project-tools">
            <h3 className="project-subtitle">Tools:</h3>
            <ul className="project-tools__items">
              <li className="project-tools__item">HTML</li>
              <li className="project-tools__item">CSS</li>
              <li className="project-tools__item">JavaScript</li>
              <li className="project-tools__item">Bootstrap</li>
              <li className="project-tools__item">Responsive</li>
              <li className="project-tools__item">Flex box</li>

            </ul>
          </div>
          <div className="project-description">
            <h3 className="project-subtitle">Description:</h3>
            <p className="project-paragraph">Building a responsive website by using HTML, CSS and Bootstrap for creating and styling the website page. There is a slider in the header, and the courasell slider was used, the fonts were taken from FontAwesome.
              On the body pages we have a container that holds all the content. I've used a grid system that holds all of these images, as well as on the slider below.</p>
          </div>
        </div>
      </div>

    </ ProjectItem>
  );
};

export default AnaOlsonWebsite;