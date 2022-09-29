import { staticFolder } from "../../utils/url-lib";
import ProjectItem from "../ProjectItem";


const Gym = (props) => {
  return (
    <ProjectItem>

      <div className="project-title" id="gym">Gym Exercises App</div>
      <div className="project-overview"><div className="left">
        <div className="project-img-container">
          <img src={staticFolder() + "/img/gym.png"} alt="" />
        </div>
        <div className="project-buttons">
          <a target="_blank" href="https://github.com/bokigolic/gym-exercises-app" rel="noreferrer">GitHub</a>
          <a target="_blank" href="#" rel="noreferrer">In Progress</a>
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
              <li className="project-tools__item">Material UI (5)</li>
              <li className="project-tools__item">Reack Hooks</li>


            </ul>
          </div>
          <div className="project-description">
            <h3 className="project-subtitle">Description:</h3>
            <p className="project-paragraph">A simple application that has the option of choosing exercises by category. Fetching data from unlimited sources using RapidAPI, gives users the opportunity to choose a specific group of muscles, browse more than one thousand exercises with practical examples, pagination, exercise details, and with a graphic display helps to perform exercises.
              <b><br />
                Creating a Beautiful User Interface using the Material UI version 5</b></p>
          </div>
        </div>
      </div>
    </ ProjectItem>
  );
};

export default Gym;