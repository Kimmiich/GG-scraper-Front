import React from 'react';
import { SliderData } from './sliderData';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function Slider() {
  return (
    <div>
      <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true}>
        {SliderData.map((slide, index) => {
          return (
            <div key={index + 1}>
              <img src={slide.image} alt="hero" />
              <img src={slide.logo} alt="logo" style={{ display: 'none' }} />
              <h3>{slide.title}</h3>
              {slide.links.map((link, index) => {
                return <button key={link + index}>{link}</button>;
              })}
              <p>{slide.description}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Slider;
