

import { staticFolder } from "../utils/url-lib";
import ProjectItem from "./ProjectItem";

const Virtuo = () => {

  return (
    <ProjectItem>

      <div className="project-title">Advertising</div>
      <div className="project-overview">
        <div className="right">
          <div className="project-img-container">
            <img className='image-city' src={staticFolder() + "/imgcity/virtuo.jpg"} alt="advertising city magazine" />
          </div>

        </div>
        <div className="left">

          <div className="project-description">
            <h3 className="project-subtitle">Description: Advertising</h3><br/>
            <p className="project-paragraph"><b>Paid advertisement in City BL magazine </b><br/><br/>
            One option is to go really local with free magazines that you'd find in grocery stores or pharmacies. The focus of these types of publications is on home sales, cars, boats and other topics--you've probably picked up one yourself. Your business doesn't have to tie directly into the topics of any one of the magazines, as long as the readers of those magazines would also be interested in your product or service. Remember, it's the audience that counts, and you can find that audience in any number of places. The contact information for advertising in these publications will also be located within the first few pages</p>
          </div>
        </div>
      </div>

    </ ProjectItem>
  );
};

export default Virtuo;

