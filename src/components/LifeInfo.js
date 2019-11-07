import React from 'react';
import { Row, Col } from 'reactstrap';
import "../css/bio.css"

// Main landing page for my portfolio site 
const LifeInfo = () => {
    return (
        <Row className="pt-5 pb-5 mt-3">
            {/* Short Bio */}
            <Col lg="4">
                <h3 className="section-heading">Short Bio</h3>
                <ul className="pt-2">
                    {/* <!-- Born Section -----> */}
                    <li>
                        <p><strong>Born</strong></p>
                    </li>
                    <ul className="life-list">
                        <li>
                            <p className="mb-0">Jose A Nunez</p>
                        </li>
                        <li>
                            <p className="mb-0">September 16</p>
                        </li>
                        <li>
                            <p className="mb-0">Santo Domingo, Dominican Republic</p>
                        </li>
                    </ul>

                    {/* <!-- Personality Section -----> */}
                    <li>
                        <p><strong>Personality Type</strong></p>
                    </li>
                    <li style={{ listStyle: "none" }}>
                        <a href="https://www.16personalities.com/profiles/98c606a8eec94" target="_blank" rel="noopener noreferrer">
                            <img src="/images/personality.png" id="img-personality" alt="my personality type"/>
                        </a>

                        <p>
                            According to <a href="https://www.16personalities.com/profiles/98c606a8eec94"
                                target="_blank" rel="noopener noreferrer"><span style={{color:"#990000"}}>16personalities.com</span></a>
                            <br></br>
                            Click to see my profile
                                </p>
                    </li>

                    {/* <!-- Residence Section -----> */}
                    <li>
                        <p><strong>Residence</strong></p>
                    </li>
                    <ul className="life-list">
                        <li>
                            <p className="mb-0">
                                Kissimmee, FL, United States
                                    </p>
                        </li>
                    </ul>

                    {/* <!-- Occupation Section -----> */}
                    <li>
                        <p className="pt-3"><strong>Occupation</strong></p>
                    </li>
                    <ul className="life-list">
                        <li>
                            <p className="mb-0">Computer Science student</p>
                        </li>
                        <li>
                            <p className="mb-0">Math tutor</p>
                        </li>
                        <li>
                            <p className="mb-0">Project Manager of a
                                        <br></br>Senior Design team of 5
                                    </p>
                        </li>
                    </ul>

                    {/* <!-- hobbies Section --> */}
                    <li>
                        <p className="pt-3"><strong>hobbies</strong></p>
                    </li>
                    <ul className="life-list">
                        <li>
                            <p className="mb-0">Sports & Exercise</p>
                        </li>
                        <li>
                            <p className="mb-0">Exploring new locations with friends</p>
                        </li>
                        <li>
                            <p className="mb-0">Learning</p>
                        </li>
                    </ul>
                </ul>
            </Col>

            {/* <!-- Experience  ------> */}
            <Col lg="4" className="pl-5">
                <h3 className="section-heading">Experience</h3>
                <ul className="pt-2">
                    <li>
                        <p><strong>FIS:</strong> Software Engineer Intern,
                                    <br></br>
                            June 2019 - August 2019
                                </p>
                    </li>
                    <li>
                        <p><strong>Valencia College:</strong> Math Tutor,
                                    <br></br>
                            January 2017 - Present</p>
                    </li>
                </ul>

                <h3 className="section-heading">Education</h3>
                <ul className="pt-2">
                    <li>
                        <p><strong>University of Central Florida:</strong> BA in Computer Science,
                                    <br></br>
                            Spring 2017 - Fall 2019
                                </p>
                    </li>
                    <li>
                        <p><strong>Valencia College:</strong> AA in Computer Science,
                                    <br></br>
                            Fall 2014 - Fall 2016
                                </p>
                    </li>
                    <li>
                        <p>
                            <strong>Professional And Technical High School:</strong>
                            <br></br>
                            2006-2010
                                </p>
                        <ul className="life-list">
                            <li>Awards/Certificates in Computer Programming,
                                        <br></br>
                                2007 - 2010
                                    </li>
                        </ul>
                    </li>
                </ul>

                <h3 className="section-heading">Certificates</h3>
                <ul className="pt-2">
                    <li>
                        <p><strong>CRLA:</strong> International Tutor Training Program,
                            <br></br>
                            Fall 2018
                        </p>
                    </li>
                </ul>

                <h3 className="section-heading">Awards</h3>
                <ul className="pt-2">
                    <li>
                        <p><strong>FIS:</strong> "Most Inquisitive" Intern,
                            <br></br>
                            Summer 2019
                        </p>
                    </li>
                    <li>
                        <p><strong>Dean's List:</strong> Valencia College,
                            <br></br>
                            Fall 2015
                        </p>
                    </li>
                    <li>
                        <p><strong>Computer Programmer:</strong> High School award for completing
                            <br></br>
                            150 Hrs of programming
                        </p>
                    </li>
                    <li>
                        <p><strong>Junior Programmer I:</strong> High School award for completing
                            <br></br>
                            300 Hrs of programming
                        </p>
                    </li>
                    <li>
                        <p><strong>Junior Programmer II:</strong> High School award for completing
                            <br></br>
                            450 Hrs of programming
                        </p>
                    </li>
                    <li>
                        <p><strong>Business Computer Programming:</strong> High School award for completing
                            The entire "Business Computer Programming" program
                                </p>
                    </li>
                </ul>
            </Col>

            {/* <!-- Self learning -----> */}
            <Col lg="3" className="pl-5">
                <h3 className="section-heading">Self-learning</h3>
                <ul className="pt-2">
                    <li>
                        <p><strong>Teamtreehouse.com</strong></p>
                    </li>
                    <ul className="life-list">
                        <li>
                            <p><strong>JavaScript:</strong> Completed 19 Hrs</p>
                        </li>
                        <li>
                            <p><strong>React.js:</strong> Completed 4 Hrs</p>
                        </li>
                        <li>
                            <p><strong>HTML:</strong> Completed 4 Hrs </p>
                        </li>
                        <li>
                            <p><strong>CSS:</strong> Completed 14.5 Hrs</p>
                        </li>
                        <li>
                            <p><strong>Node.js:</strong> Completed 2 Hrs</p>
                        </li>
                        <li>
                            <p><strong>Express.js:</strong> Completed 2 Hrs</p>
                        </li>
                        <li>
                            <p><strong>Git:</strong> Completed 4.5 Hrs</p>
                        </li>
                        <li>
                            <p className="pr-4"><strong>Android Development:</strong> Completed 7 Hrs</p>
                        </li>
                        <li>
                            <p><strong>Bootstrap:</strong> Completed 2 Hrs</p>
                        </li>
                    </ul>
                    <li>
                        <p><strong>Books</strong></p>
                    </li>
                    <ul className="life-list">
                        <li><strong>Outliers:</strong> The Story of Success, by Malcolm Gladwell</li>
                        <li><strong>Burn the Business Plan:</strong> What Great Entrepreneurs Really Do, by Carl
                                    Schramm</li>
                        <li><strong>The Richest Man in Babylon</strong>, by George Samuel Clason</li>
                        <li><strong>The Compound Effect</strong>, by Darren Hardy</li>
                    </ul>
                </ul>
            </Col>

        </Row>
    );
}

export default LifeInfo;