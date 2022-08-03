import { useEffect, useState } from "react";
import { staticFolder } from "../utils/url-lib";
import BootstrapPortfolio from "./BootstrapPortfolio";
import CarPerformance from "./CarPerformance";
import CityHome from "./CityHome";
import Contents from "./Contents";
import FashionWebsite from "./FashionWebsite";
import SliderItem from "./SliderItem";
import Talija from "./Talija";
import Travel from "./Travel";
import Vanja from "./Vanja";
import Virtuo from "./Virtuo";

const SliderProjects = (props) => {

  const [slideIndex, setSlideIndex] = useState(0);




  let jsxSlides = [
    (
      <SliderItem key={0}>
        <CityHome />
      </SliderItem>
    ),
    (
      <SliderItem >
        <Contents key={2} />
      </SliderItem>
    ),
    (
      <SliderItem >
        <Talija key={3} />
      </SliderItem>
    ),
    (
      <SliderItem >
        <Vanja key={4} />
      </SliderItem>
    ),
    (
      <SliderItem >
        <Virtuo key={5} />
      </SliderItem>
    ),
    (
      <SliderItem >
        <Travel key={6} />
      </SliderItem>
    ),
  ];

  const handleClickNext = (e) => {
    if (slideIndex < (jsxSlides.length - 1)) {
      setSlideIndex(slideIndex + 1)
    } else {
      setSlideIndex(0)
    }

  };

  const handleClickPrev = (e) => {
    if (slideIndex === 0) {
      setSlideIndex(jsxSlides.length - 1)

    } else {

      setSlideIndex(slideIndex - 1)
    }

  };


  let offset = (slideIndex * -100) + '%';


  return (
    <section className="slider-container">
      <div className="slider" style={{ left: offset }}>
        <div className="slides" >
          {jsxSlides}
        </div>
      </div>
      <img src={staticFolder() + "/img/arrow.png"} className="arrow left" alt="" onClick={handleClickPrev} />
      <img src={staticFolder() + "/img/arrow.png"} className="arrow right" alt="" onClick={handleClickNext} />
    </section>
  );
};

export default SliderProjects;