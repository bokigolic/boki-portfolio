import { staticFolder } from "../../utils/url-lib";
import ProjectItem from "../ProjectItem";

const BootstrapPortfolio = () => {

  return (
    <ProjectItem>

      <div className="project-title" id="bootstrapportfolio">Bootstrap Portfolio</div>
      <div className="project-overview"><div className="left">
        <div className="project-img-container">
          <img src={staticFolder() + "/img/bootstrap-portfolio.jpg"} alt="Botstrap portfolio" />
        </div>
        <div className="project-buttons">
          <a target="_blank" href="https://github.com/bokigolic/PortfolioBootstrap" rel="noreferrer">GitHub</a>
          <a target="_blank" href="https://bokigolic.github.io/PortfolioBootstrap/" rel="noreferrer">Live View</a>
        </div>
      </div>
        <div className="right">
          <div className="project-tools">
            <h3 className="project-subtitle">Tools:</h3>
            <ul className="project-tools__items">
              <li className="project-tools__item">HTML</li>
              <li className="project-tools__item">CSS</li>
              <li className="project-tools__item">Bootstrap</li> </ul>
          </div>
          <div className="project-description">
            <h3 className="project-subtitle">Description:</h3>
            <p className="project-paragraph">Portfolio is an elegant and creative website template built with the Bootstrap framework.<br />
              Fully responsive and built with the Latest Bootstrap version </p>
          </div>
        </div>
      </div>

    </ ProjectItem>
  );
};

export default BootstrapPortfolio;

