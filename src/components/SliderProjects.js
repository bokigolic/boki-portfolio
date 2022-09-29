import { useEffect, useState } from "react";
import { staticFolder } from "../utils/url-lib";
import Contents from "../components/city-bl/Contents";
import Talija from "../components/city-bl/Talija";
import Travel from "../components/city-bl/Travel";
import Vanja from "../components/city-bl/Vanja";
import Virtuo from "../components/city-bl/Virtuo";
import CityHome from "../components/city-bl/CityHome";
import SliderItem from "../components/SliderItem";

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
        <Contents key={1} />
      </SliderItem>
    ),
    (
      <SliderItem >
        <Talija key={2} />
      </SliderItem>
    ),
    (
      <SliderItem >
        <Vanja key={3} />
      </SliderItem>
    ),
    (
      <SliderItem >
        <Virtuo key={4} />
      </SliderItem>
    ),
    (
      <SliderItem >
        <Travel key={5} />
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