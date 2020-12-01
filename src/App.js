import React from "react";
import "./App.css";
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import Container from "react-bootstrap/Container";
import Image from "./assets/images/parallax/25101.webp";

// components
import MyNavbar from "./components/Navbar/MyNavbar";
import MyCarousel from "./components/MyCarousel/MyCarousel.component";
import Title from "./components/Title/Title.component";
import About from "./pages/About/About.component.jsx";
import Skills from "./pages/Skills/Skills.component.jsx";
import Experience from './pages/Experience/Experience.component.jsx';

const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousel />
      <Title />
      {/* about me section */}
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
      <div>
        <Container className="container-box rounded">
            <Skills />
        </Container>
      </div>
      <div>
        <Container className="container-box rounded">
          <Fade duration={400}>
            <Experience />
          </Fade>
        </Container>
      </div>
    </div>
  );
};

export default App;
