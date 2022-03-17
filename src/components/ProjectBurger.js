import { staticFolder } from "../utils/url-lib";
import ProjectItem from "./ProjectItem";

const ProjectBurger = (props) => {
  return (
    <ProjectItem>

      <div class="project-title">Burger Builder</div>
      <div class="project-overview"><div class="left">
        <div class="project-img-container">
          <img src={staticFolder() + "/img/primer1.png"} alt="" />
        </div>
        <div class="project-buttons">
          <a target="_blank" href="https://github.com/Berezka-creator/burger-app" rel="noreferrer">GitHub</a>
          <a target="_blank" href="https://berezka-creator.github.io/burger-app/" rel="noreferrer">Live View</a>
        </div>
      </div>
        <div class="right">
          <div class="project-tools">
            <h3 class="project-subtitle">Tools:</h3>
            <ul class="project-tools__items">
              <li class="project-tools__item">HTML</li>
              <li class="project-tools__item">CSS</li>
              <li class="project-tools__item">JavaScript</li>
              <li class="project-tools__item">ReactJS</li>
              <li class="project-tools__item">Redux</li>
              <li class="project-tools__item">API</li>
              <li class="project-tools__item">Firebase</li>
            </ul>
          </div>
          <div class="project-description">
            <h3 class="project-subtitle">Description:</h3>
            <p class="project-paragraph">This is a web application that uses ReactJS to create your custom burger, you can choose ingredients and see how your burger will look like and how much will it cost,  The burger animation is done through CSS for faster perfomance. Than you can proceed to checkout and once you submited, it is stored in a database using Firebase. This allows to login and view your orders anytime in the future. </p>
          </div>
        </div>
      </div>

    </ ProjectItem>
  );
};

export default ProjectBurger;