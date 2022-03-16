import { staticFolder } from "../utils/url-lib";

const PortfolioItem = (props) => {
  return (
    <a href="/projects#burger">
      <div class="item">
        <img src={staticFolder() + "/img/primer1.png"} alt="primer portfolio pprojekta" />
        <h3>React Burger Builder</h3>
      </div>
    </a>
  )
};

export default PortfolioItem;