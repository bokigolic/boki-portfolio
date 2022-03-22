import { useDispatch } from "react-redux";
import { actionRouteSet, actionRouteWithWithHashSet } from "../redux/actions";
import { staticFolder } from "../utils/url-lib";

const PortfolioItem = (props) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    // dispatch(actionRouteSet('PROJECTS'));
    dispatch(actionRouteWithWithHashSet('PROJECTS', props.fragment));
  };

  return (
    <a
      href="/projects#burger"
      onClick={handleClick}
    >
      <div className="item">
        <img src={staticFolder() + props.imagePath} alt="primer portfolio pprojekta" />
        <h3>{props.title}</h3>
      </div>
    </a>
  )
};

export default PortfolioItem;