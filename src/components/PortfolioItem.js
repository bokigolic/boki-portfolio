import { useDispatch } from "react-redux";
import { staticFolder } from "../utils/url-lib";

const PortfolioItem = (props) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ROUTE_SET',
      payload: 'PROJECTS'
    });
  };

  return (
    <a
      href="/projects#burger"
      onClick={handleClick}
    >
      <div className="item">
        <img src={staticFolder() + "/img/primer1.png"} alt="primer portfolio pprojekta" />
        <h3>React Burger Builder</h3>
      </div>
    </a>
  )
};

export default PortfolioItem;