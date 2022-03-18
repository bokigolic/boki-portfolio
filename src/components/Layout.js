import React from 'react';
import { useDispatch } from 'react-redux';
import { actionDrawerOpen } from '../redux/actions';
import { staticFolder } from '../utils/url-lib';
import Drawer from './Drawer';
import PageRouter from './PageRouter';
import PortfolioItem from './PortfolioItem';
import SliderItem from './SliderItem';


const Layout = () => {
  const dispatch = useDispatch();

  const handleClickHamburger = (e)=> {
    dispatch(actionDrawerOpen());
  };

  return (
    <div className="layout">

      <Drawer />

      <div className="topbar false">
        <div className="wrapper">
          <div className="left">
            <a href="/portfolio#intro"><div className="logo"><img className="boki-logo" src="/static/img/logo-bojan.png" alt="boki-logo" /></div></a>
            <div className="itemContainer">
              <svg className="MuiSvgIcon-root icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg><span><a href="callto:+17039090093">+1 (703) 909-0093</a></span></div><div className="itemContainer"><svg className="MuiSvgIcon-root icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg><span><a href="mailto:bokigolic32@gmail.com">bokigolic32@gmail.com</a></span></div>
          </div>
          <div className="right">
            <div className="humburger" onClick={handleClickHamburger}><span className="line1"></span><span className="line2"></span><span className="line3"></span>
            </div>
          </div>
        </div>
      </div>

      {/* ispod topbara je mnu koji se pojavljuje kad se klikne na hamburger ali to cemo drugom prilikom */}

      <div className="layout-body">

        <PageRouter />

      </div>


    </div>
  );
}

export default Layout;
