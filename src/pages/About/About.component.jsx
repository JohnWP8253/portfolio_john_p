import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Profile from "../../assets/images/Enlight57.jpeg";
import "./About.syles.css";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            {/* Profile Picture */}
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  rounded
                  fluid
                />
              </Row>
            </Col>
            {/* About be description */}
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Salutations! I'm<strong>&nbsp; John Pendergrass,</strong>
                a passionate programmer and educator from Tennessee. I'm a Full
                Stack Web Developer with focus on React.js, Redux, Node.js with
                MERN as my current tech stack.
                <br /> <br />
                At the beginning of 2020, after two decades of teaching along
                with a couple years of instructional design, I successfully
                completed a full stack web development bootcamp with Vanderbilt
                University.
                <br /> <br />
                When working with clients, my drive is to deliver an amazing
                collaborative experience, not to mention the best level of
                quality and service.
                <br /> <br />
                Lastly, I am currently a TUTOR aiding other individuals like
                myself to become full stack developers. It enables me to fully
                understand and stay abreast of current technologies and how to
                solve problems in order to build better, scalable products.
              </Row>
              {/* Links */}
              <Col className="d-flex justify-content-center flex-wrap pt-5">
                {/* Contact button */}
                <div>
                  <a href="#contact">
                    <Button className="m-2" variant="outline-success">
                      Contact Me
                    </Button>
                  </a>
                </div>
                {/* Github */}
                <div>
                  <a
                    href="https://github.com/JohnWP8253"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-secondary">
                      Github
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/john-pendergrass-2a700a62/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-info">
                      LinkedIn
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    href="https://bit.ly/2JoQ2cj"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-danger">
                      My Resume
                    </Button>
                  </a>
                </div>
              </Col>
              <Row></Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
