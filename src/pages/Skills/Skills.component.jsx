import React from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import { skills } from "./Skills-data";
import "./Skills.styles.css";

const Skills = () => {
  return (
    <div className="pt-3 pb-3" id="skills">
      <h1 className="text-center font-details-b pb-4">
        <i class="fas fa-code-branch fa-fw"></i> TECH SKILLS
      </h1>

      <CardColumns>
        {/* ******** */}
        {/* Frontend */}
        {/* ******** */}

        <Card className="focus mt-2 mb-2" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title className="text-center card-title">Frontend</Card.Title>
            <hr />
            <Card.Text className="card-text d-flex justify-content-start flex-column">
              {skills.frontend.map((skill, index) => (
                <span className="p-2" key={index}>
                  <a
                    className="text-dark text-decoration-none"
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={skill.imgSrc}
                      alt={skill.imgAltText}
                      rounded
                      className="image-style m-1"
                    ></Image>{" "}
                    {skill.skillName}
                  </a>
                </span>
              ))}
            </Card.Text>
          </Card.Body>
        </Card>

        {/* ******* */}
        {/* Backend */}
        {/* ******* */}

        <Card className="focus mt-2 mb-2" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title className="text-center  card-title">Backend</Card.Title>
            <hr />
            <Card.Text className="card-text d-flex justify-content-start flex-column">
              {skills.backend.map((skill, index) => (
                <span className="p-2" key={index}>
                  <a
                    className="text-dark text-decoration-none"
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={skill.imgSrc}
                      alt={skill.imgAltText}
                      rounded
                      className="image-style m-1"
                    ></Image>{" "}
                    {skill.skillName}
                  </a>
                </span>
              ))}
            </Card.Text>
          </Card.Body>
        </Card>

        {/* ***************** */}
        {/* Hosting Platforms */}
        {/* ***************** */}

        <Card className="focus mt-2 mb-2" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title className="text-center  card-title">
              Hosting Platforms
            </Card.Title>
            <hr />
            <Card.Text className="card-text d-flex justify-content-start flex-column">
              {skills.hostingPlatforms.map((skill, index) => (
                <span className="p-2" key={index}>
                  <a
                    className="text-dark text-decoration-none"
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={skill.imgSrc}
                      alt={skill.imgAltText}
                      rounded
                      className="image-style m-1"
                    ></Image>{" "}
                    {skill.skillName}
                  </a>
                </span>
              ))}
            </Card.Text>
          </Card.Body>
        </Card>

        {/* ******************** */}
        {/* Programming languages*/}
        {/* ******************** */}

        <Card className="focus mt-2 mb-2" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title className="text-center  card-title">
              Programming Languages
            </Card.Title>
            <hr />
            <Card.Text className="card-text d-flex justify-content-start flex-column">
              {skills.programmingLanguages.map((skill, index) => (
                <span className="p-2" key={index}>
                  <a
                    className="text-dark text-decoration-none"
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={skill.imgSrc}
                      alt={skill.imgAltText}
                      rounded
                      className="image-style m-1"
                    ></Image>{" "}
                    {skill.skillName}
                  </a>
                </span>
              ))}
            </Card.Text>
          </Card.Body>
        </Card>

        {/* ******** */}
        {/* Databases*/}
        {/* ******** */}

        <Card className="focus focus mt-2 mb-2" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title className="text-center  card-title">
              Databases
            </Card.Title>
            <hr />
            <Card.Text className="card-text d-flex justify-content-start flex-column">
              {skills.databases.map((skill, index) => (
                <span className="p-2" key={index}>
                  <a
                    className="text-dark text-decoration-none"
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={skill.imgSrc}
                      alt={skill.imgAltText}
                      rounded
                      className="image-style m-1"
                    ></Image>{" "}
                    {skill.skillName}
                  </a>
                </span>
              ))}
            </Card.Text>
          </Card.Body>
        </Card>

        {/* *************** */}
        {/* Version Control */}
        {/* *************** */}

        <Card className="focus focus mt-2 mb-2" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title className="text-center  card-title">
              Version Control
            </Card.Title>
            <hr />
            <Card.Text className="card-text d-flex justify-content-start flex-column">
              <span className="p-2">
                <a
                  className="text-dark text-decoration-none"
                  href={skills.versionControl[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={skills.versionControl[0].imgSrc}
                    alt={skills.versionControl[0].imgAltText}
                    rounded
                    className="image-style m-1"
                  ></Image>{" "}
                  {skills.versionControl[0].skillName}
                </a>
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardColumns>
    </div>
  );
};

export default Skills;
