import { useDispatch, useSelector } from "react-redux";
import { actionRouteSet, actionRouteWithWithHashSet } from "../redux/actions";

const Drawer = (props) => {
  const dispatch = useDispatch();
  const drawerOpened = useSelector(state => state.drawerOpened);

  const handleClickHome = (e)=> {
    e.preventDefault();
    dispatch(actionRouteWithWithHashSet('HOME', 'intro'));
  };

  const handleClickPortfolio = (e)=> {
    e.preventDefault();
    dispatch(actionRouteWithWithHashSet('HOME', 'portfolio'));
  };

  const handleClickProjects = (e)=> {
    e.preventDefault();
    dispatch(actionRouteSet('PROJECTS'));
  };

  const handleClickContact = (e)=> {
    e.preventDefault();
    dispatch(actionRouteWithWithHashSet('HOME', 'contact'));
  };

  return (
    <div className={drawerOpened ? "drawer opened" : "drawer"}>

      <ul class="menuItems">
        <li class="menuItem">
          <a href="#intro" onClick={handleClickHome}>Home</a>
        </li>
        <li class="menuItem">
          <a href="#portfolio" onClick={handleClickPortfolio}>Portfolio</a>
        </li>
        <li class="menuItem">
          <a href="#projects" onClick={handleClickProjects}>Projects Overview</a>
        </li>
        <li class="menuItem">
          <a href="#contact" onClick={handleClickContact}>Contact</a>
        </li>
      </ul>

    </div>
  );
};

export default Drawer;