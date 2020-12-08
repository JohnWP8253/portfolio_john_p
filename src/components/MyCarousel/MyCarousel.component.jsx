import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assets/images/IMG_0261.jpeg";
import Slide2 from "../../assets/images/IMG_0620 (1).jpeg";
import Slide3 from "../../assets/images/IMG_0043.jpeg";
import ScrollDown from "../Scroll-down/scrollDown.component";

const MyCarousel = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <img
            id="slide1"
            className="d-block w-100 "
            style={{ width: "100%", height: "100%"}}
            src={Slide1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            style={{ width: "100%", height: "100%"}}
            src={Slide2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            style={{ width: "100%", height: "100%"}}
            src={Slide3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      {/* <div className="overlay"></div> */}
      <ScrollDown />
    </div>
  );
};

export default MyCarousel;
