import { staticFolder } from "../utils/url-lib";

const SliderItem = (props) => {
  return (
    <div class="container" id="host">
      <div class="item">
        <div class="project">
          <div class="project-container">
            <div class="project-title">Hosting Website</div>
            <div class="project-overview">
              <div class="left"><div class="project-img-container">
                <img src={staticFolder() + "/img/primer1.png"} alt=""/>
                </div>
                <div class="project-buttons">
                  <a target="_blank" href="https://github.com/Berezka-creator/academind_css_project" rel="noreferrer">GitHub</a>
                  <a target="_blank" href="https://berezka-creator.github.io/academind_css_project/" rel="noreferrer">Live View</a>
                </div>
                </div>
                <div class="right">
                  <div class="project-tools">
                  <h3 class="project-subtitle">Tools:</h3>
                <ul class="project-tools__items">
                  <li class="project-tools__item">HTML</li>
                <li class="project-tools__item">CSS</li>
                <li class="project-tools__item">Sass</li>
                <li class="project-tools__item">JavaScript</li>
                <li class="project-tools__item">Responsive Web Design</li>
                </ul>
                </div>
                <div class="project-description">
                  <h3 class="project-subtitle">Description:</h3>
                  <p class="project-paragraph">It is a website that provides information about hosting to the customers. The purpose of this project was to practice on CSS features such as: Flexboxes, Grid Layout, Responsive Web Design,  SASS.</p>
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