import { useSelector } from "react-redux";

const Drawer = (props) => {
  const drawerOpened = useSelector(state => state.drawerOpened);

  return (
    <div className={drawerOpened ? "drawer opened" : "drawer"}>

      <ul class="menuItems">
        <li class="menuItem">
          <a href="/#intro">Home</a>
        </li>
        <li class="menuItem">
          <a href="/#portfolio">Portfolio</a>
        </li>
        <li class="menuItem">
          <a href="/projects">Projects Overview</a>
        </li>
        <li class="menuItem">
          <a href="/#contact">Contact</a>
        </li>
      </ul>

    </div>
  );
};

export default Drawer;