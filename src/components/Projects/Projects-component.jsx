import React from "react";
import { Timeline, Events, UrlButton, ImageEvent, createTheme, themes, YouTubeEvent } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from 'react-bootstrap/Image';

// ********
// Projects
// ********
import L_CollocationCreation from '../../assets/images/projects/freestocks-jUSu0686zDM-unsplash.jpg';
// ********
//  Skills
// ********
import L_HTML from "../../assets/images/skills/html-5.svg";
import L_CSS3 from "../../assets/images/skills/css3.svg";
import L_BOOTSTRAP from "../../assets/images/skills/bootstrap-4.svg";
import L_JAVASCRIPT from "../../assets/images/skills/javascript.svg";
import L_JQUERY from "../../assets/images/skills/jquery.svg";
import L_AJAX from "../../assets/images/skills/ajax.svg";
import L_REST_API from "../../assets/images/skills/REST-API-icon.svg";

import "./Projects.style.css";

const customTheme = createTheme(themes.default, {
    date: {
        backgroundColor: '#30b6f0' 
    },
    marker: {
        borderColor: '#30b6f0'
    },
    timelineTrack: {
        backgroundColor: '#30b6f0'
    },
    urlButton: {
        backgroundColor: '#ed2424'
    },
});

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3"><i class="fas fa-project-diagram"></i> PROJECTS</h1>
      <Timeline theme={customTheme}>
        <Events>
          <ImageEvent
            date="5/2020"
            text="Collocation Creation"
            src={L_CollocationCreation}
            alt="freestocks-jUSu0686zDM-unsplash"
            credit="Photo by [@freestocks](https://unsplash.com/@freestocks)"
          >
                  <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      <strong>PROJECT DETAILS</strong>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A dictionary/thesaurus application for learners of the English language which helps with collocations. 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Provides definition of searched word</li>
                          <li>Provides synonym of searched word</li>
                          <li>Provides collocations of searched word</li>
                          <li>Provides phonetic script of searched word</li>
                          <li>Provides pronunciation audio of searched word</li>
                          <li>Saves previous searches</li>
                          <li>Dark Mode</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP}
                                alt="Bootstrap"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JQUERY}
                                alt="jQuery"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              jQuery
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_AJAX}
                                alt="AJAX"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              AJAX
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REST_API}
                                alt="REST API"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              REST API
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://bootcamp-projects.github.io/collocation-creation/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/Bootcamp-Projects/collocation-creation"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://1drv.ms/u/s!AsTLbKRukIANh44ANs2rVWMtAa79GQ?e=klvSU2"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default Projects;
