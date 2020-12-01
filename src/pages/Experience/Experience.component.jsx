import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import Trilogy from "../../assets/images/experience/trilogy-logo.svg";

import "./Experience.style.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">
        <i class="fas fa-briefcase fa-fw"></i> Experience
      </h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={Trilogy}
                  alt="Trilogy logo"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center body-title-style ">
                    <h2>Full Stack Development Tutor</h2>
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong>Full Stack Developer</strong>
                    <br />
                    <strong>Role:</strong> Tutor for full stack bootcamp
                    students
                    <br />
                    <strong> Description:</strong> provide academic support for
                    bootcamp students with activities, assignments and projects.
                    In addition, guide students in maintaining code through
                    proper formatting, debugging and testing. Lastly, to guide
                    students to a final project using MERN stack.
                    <br />
                    <strong>Technology:</strong> HTML/CSS, JavaScript, ReactJS,
                    NodeJS, MySQL, MongoDB, Express.js
                    <br />
                    <strong>Duration:</strong> October 2020 - Present
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
