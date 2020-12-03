import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import "./Contact.styles.css";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">
        <i class="far fa-id-card fa-fw"></i> Contact Me
      </h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            {/* ************* */}
            {/* Email contact */}
            {/* ************* */}

            <div className="m-2">
              <a
                href="mailto:john.pendergrass@me.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline-success"
                  title="john.pendergrass@me.com"
                >
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>

            {/* **************** */}
            {/* LinkedIn contact */}
            {/* **************** */}

            <div className="m-2">
              <a
                href="https://www.linkedin.com/in/john-pendergrass-2a700a62/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline-primary"
                  title="john.pendergrass@me.com"
                >
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>

            {/* *************** */}
            {/* YouTube contact */}
            {/* *************** */}

            <div className="m-2">
              <a href="https://bit.ly/37st2RN" target="_blank" rel="noopener noreferrer">
                <Button id="youtube-btn" variant="outline-info" title="Coder Cub">
                <i class="fab fa-youtube"></i> Youtube
                </Button>
              </a>
            </div>

            {/* *************** */}
            {/* Twitter contact */}
            {/* *************** */}

            <div className="m-2">
              <a href="https://twitter.com/JohntheDuchess" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="Coder Cub">
                <i class="fab fa-twitter"></i> Twitter
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default Contact;
