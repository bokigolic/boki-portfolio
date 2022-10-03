import React, { useState } from 'react';
import { ajax } from '../utils/ajax-adapter';
import { staticFolder } from '../utils/url-lib';
import PortfolioItem from './PortfolioItem';
import SliderProjects from './SliderProjects';
import TextScroller from './TextScroller';

const PageHome = (props) => {
  const preset = {
    email: '',
    text: ''
  };
  const [state, setState] = useState(preset); // satte za formu
  const handleChange = (e) => {

    // ovo je univerzalni kod za upotrebu u formama unutar funkcionalnih komponenti sa useState hook-om.
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setState({
      ...state,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = state;
    ajax.sendContactEmail(formData);
  };



  return (
    <div className="sections">

      <section className="intro" id="intro">
        <div className="imgContainer"></div>
        <div className="wrapper">
          
          <h1>Bojan Golic </h1>
          

          <h3><span></span><span className="ityped-cursor"><TextScroller text="Full Stak Developer" /></span></h3>
          <div className="social">
            <a href="https://www.linkedin.com/in/bojan-golic-35174120a/" target="_blank" rel="noreferrer">
              <img className="icone" src={staticFolder() + "/img/linkedin.png"} alt="" />
            </a>
            <a href="https://github.com/bokigolic" target="_blank" rel="noreferrer">
              <img className="icone" src={staticFolder() + "/img/github.png"} alt="" />
            </a>
         
          </div>
          <div className="buttons">
            <a className='moved-button' href="https://github.com/bokigolic/boki-portfolio">Portfolio</a>
            <a className='moved-button2' target="_blank" href="/static/resume/GW_Certificate.pdf">Certificate</a>
        
          </div>
        </div>
        <a href="#portfolio" id="arrow">
          <img src={staticFolder() + "/img/arrow.png"} alt="" />
        </a>
      </section>


      <section className="portfolio" id="portfolio">
        <h1>My Projects</h1>
        <div className="container">
          <PortfolioItem title="Gym" imagePath="/img/gym.png" fragment="gym" />
          <PortfolioItem title="Facebook clone" imagePath="/img/facebook-clone.png" fragment="facebook" />
          <PortfolioItem title="American Hiking Club" imagePath="/img/americanhikingclub-small.png" fragment="americanhikingclub" />
          <PortfolioItem title="Ana Olson website" imagePath="/img/anaolson.jpg" fragment="anaolson" />
          <PortfolioItem title="Fashion Website" imagePath="/img/fashion-site.jpg" fragment="fashionsite" />
          <PortfolioItem title="Horiseon" imagePath="/img/firstSite.jpg" fragment="horiseonwebsite" />
          <PortfolioItem title="Car Performance" imagePath="/img/car-performance.jpg" fragment="car-performance" />
          <PortfolioItem title="Bootstrap Portfolio" imagePath="/img/bootstrap-portfolio.jpg" fragment="bootstrapportfolio" />
        </div>
      </section>


        

     
          <SliderProjects />
     

      <section className="contact" id="contact">
        <div className="left">
          <img src={staticFolder() + "/img/shake-hands.svg"} alt="hand shake" />
        </div>
        <div className="right">
          <h2>Contact</h2>
          <form id="myForm" onSubmit={handleSubmit}><label>
            <input
              disabled
              name="email"
              value={state.email}
              onChange={handleChange}
              type="email"
              id="email"
              placeholder="Your email..."
              required=""
            />
          </label>
            <label>
              <textarea
                disabled
                name="text"
                value={state.text}
                onChange={handleChange}
                id="text"
                placeholder="Write something..."
                required=""
              />
            </label>
            <button disabled type="submit">Send</button>
          </form>
        </div>
      </section>


    </div>
  );
}

export default PageHome;
