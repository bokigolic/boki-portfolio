import { staticFolder } from "../utils/url-lib";

const SliderItem = (props) => {
  return (
    <div className="container" id="host">
      <div className="item">
        <div className="project">
          <div className="project-container">
            <div className="project-title">Hosting Website</div>
            <div className="project-overview">
              <div className="left"><div className="project-img-container">
                <img src={staticFolder() + "/img/primer1.png"} alt=""/>
                </div>
                <div className="project-buttons">
                  <a target="_blank" href="https://github.com/Berezka-creator/academind_css_project" rel="noreferrer">GitHub</a>
                  <a target="_blank" href="https://berezka-creator.github.io/academind_css_project/" rel="noreferrer">Live View</a>
                </div>
                </div>
                <div className="right">
                  <div className="project-tools">
                  <h3 className="project-subtitle">Tools:</h3>
                <ul className="project-tools__items">
                  <li className="project-tools__item">HTML</li>
                <li className="project-tools__item">CSS</li>
                <li className="project-tools__item">Sass</li>
                <li className="project-tools__item">JavaScript</li>
                <li className="project-tools__item">Responsive Web Design</li>
                </ul>
                </div>
                <div className="project-description">
                  <h3 className="project-subtitle">Description:</h3>
                  <p className="project-paragraph">It is a website that provides information about hosting to the customers. The purpose of this project was to practice on CSS features such as: Flexboxes, Grid Layout, Responsive Web Design,  SASS.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default SliderItem;