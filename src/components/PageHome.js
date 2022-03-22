import React from 'react';
import { staticFolder } from '../utils/url-lib';
import PortfolioItem from './PortfolioItem';
import SliderItem from './SliderItem';


const PageHome = (props) => {
  return (
    <div className="sections">

      <section className="intro" id="intro">
        <div className="imgContainer"></div>
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Bojan Golic </h1>
          <h3><span>Front End Developer</span><span className="ityped-cursor">|</span></h3>
          <div className="social">
            <a href="https://www.linkedin.com/in/bojan-golic-35174120a/" target="_blank" rel="noreferrer">
              <img className="icone" src={staticFolder() + "/img/linkedin.png"} alt="" />
            </a>
            <a href="https://github.com/bokigolic" target="_blank" rel="noreferrer">
              <img className="icone" src={staticFolder() + "/img/github.png"} alt="" />
            </a>
            <a href="https://www.facebook.com/bokiigolic/" target="_blank" rel="noreferrer">
              <img className="icone" src={staticFolder() + "/img/facebook.png"} alt="" />
            </a>
            <a href="https://www.instagram.com/boki_golic/" target="_blank" rel="noreferrer">
              <img className="icone inst" src={staticFolder() + "/img/instagram.png"} alt="" />
            </a>
          </div>
          <div className="buttons">
            <a href="/#portfolio">Portfolio</a>
            <a href="/resume">Resume</a>
          </div>
        </div>
        <a href="#portfolio" id="arrow">
          <img src={staticFolder() + "/img/arrow.png"} alt="" />
        </a>
      </section>


      <section className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <div className="container">

          <PortfolioItem />
          <PortfolioItem title="American Hiking Club" imagePath="/img/americanhikingclub-small.png" fragment="americanhikingclub" />
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />

        </div>
      </section>


      <section className="slider-container" >
        <div className="slider">

          <SliderItem />

        </div>
        <img src={staticFolder() + "/img/arrow.png"} className="arrow left" alt="" />
        <img src={staticFolder() + "/img/arrow.png"} className="arrow right" alt="" />
      </section>


      <section className="contact" id="contact">
        <div className="left">
          <img src={staticFolder() + "/img/shake-hands.svg"} alt="hand shake" />
        </div>
        <div className="right">
          <h2>Contact</h2>
          <form id="myForm"><label>
            <input name="email" type="email" id="email" placeholder="Your email..." required="" />
          </label>
            <label>
              <textarea name="comment" id="comment" placeholder="Write something..." required="" />
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
      </section>


    </div>
  );
}

export default PageHome;
