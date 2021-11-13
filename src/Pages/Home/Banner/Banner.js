import React from "react";
import { Carousel } from 'react-bootstrap';
import bike1 from '../../../images/Banner-1.jpg';
import bike2 from '../../../images/Banner-2.jpg';
import bike3 from '../../../images/Banner-3.jpg';
import bike4 from '../../../images/Banner-4.jpg';
import bike5 from '../../../images/Banner-5.jpg';


const Banner = () => {
  return (
    <div id="banner">
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src={bike1}
      alt="First slide"
    />
    <Carousel.Caption>
    <h3 className="text-warning fw-bolder ">Once you see it, You can't take your eyes off it...</h3>
      <p className=" text-white fw-bolder">Stock limited ....</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src={bike2}
      alt="First slide"
    />
    <Carousel.Caption>
    <h3 className="text-warning fw-bolder ">Once you see it, You can't take your eyes off it...</h3>
      <p className=" text-white fw-bolder">Stock limited ....</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src={bike3}
      alt="First slide"
    />
    <Carousel.Caption>
    <h3 className="text-warning fw-bolder ">Once you see it, You can't take your eyes off it...</h3>
      <p className=" text-white fw-bolder">Stock limited ....</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src={bike4}
      alt="First slide"
    />
    <Carousel.Caption>
    <h3 className="text-warning fw-bolder ">Once you see it, You can't take your eyes off it...</h3>
      <p className=" text-white fw-bolder">Stock limited ....</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src={bike5}
      alt="First slide"
    />
    <Carousel.Caption>
    <h3 className="text-warning fw-bolder ">Once you see it, You can't take your eyes off it...</h3>
      <p className=" text-white fw-bolder">Stock limited ....</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
};

export default Banner;
