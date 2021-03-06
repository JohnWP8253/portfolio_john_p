import React from "react";
import "./App.css";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import Image from "./assets/images/parallax/25101.webp";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

// components
import MyNavbar from "./components/Navbar/MyNavbar";
import MyCarousel from "./components/MyCarousel/MyCarousel.component";
import Title from "./components/Title/Title.component";
import About from "./pages/About/About.component.jsx";
import Skills from "./pages/Skills/Skills.component.jsx";
import Experience from "./pages/Experience/Experience.component.jsx";
import Projects from "./components/Projects/Projects-component.jsx";
import Contact from "./pages/Contact/Contact.component.jsx";
import Footer from "./components/Footer/Footer.component.jsx";
// import Particles from "react-particles-js";
// import { particlesOptions } from "./particleOptions";


const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousel />
      <Title />
      {/* <Particles
        className="particles particles-box"
        params={particlesOptions}
      /> */}

      {/* ********************** */}
      {/* About me section */}
      {/* ********************** */}

      <div>
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={Image}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>

      {/* ********************** */}
      {/* Skills section */}
      {/* ********************** */}

      <div>
        <Container className="container-box rounded">
            {/* <Slide bottom duration={500}> */}
            <hr />
            <Skills />
            {/* </Slide> */}
        </Container>
      </div>

      {/* ********************** */}
      {/* Experience section */}
      {/* ********************** */}

      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
          <hr />
          <Experience />
          </Fade>
        </Container>
      </div>

      {/* ********************** */}
      {/* Projects section */}
      {/* ********************** */}

      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <Projects />
          </Slide>
        </Container>
      </div>
      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <Contact />
          </Slide>
        </Container>
      </div>
      <div>
        <hr />
        <Footer />
      </div>
    </div>
  );
};

export default App;