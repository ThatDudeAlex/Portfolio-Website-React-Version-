import React from "react";
import { Container, Row, Col } from 'reactstrap';
import SectionHeading from "./SectionHeading";

const About = () => {
    return (
        <div>
            <SectionHeading
                sectionName="ABOUT"
             />

            {/* <div className="container"> */}
            <Container fluid className="boot-container">
                {/* <div className="row text-left pt-4 pb-sm-3 pb-lg-5"> */}
                <Row>
                    <Col md="5">
                        <img src="/images/me.jpg"
                            className="fluid-img profile-img p-0 mb-3 mb-md-0" alt="photo of Alex Nunez" />
                    </Col>

                    <Col md="7" id="introduction">
                        <p>
                            My name is <strong>Jose A Nunez</strong>, but I go by the name of <strong>“Alex”</strong>.
                            I’m a <strong>Computer Science</strong> student at the <strong>University of Central Florida</strong>,
                            soon to graduate in <strong>December 2019</strong>.
                        </p>

                        <p>
                            For as long as I can remember, I have always had a <strong>deep</strong> fascination for
                            both <strong>Technology</strong> & <strong>Business</strong>.
                            Eventually during my early teens, I was inspired by entrepreneurs such as <strong>Bill
                            Gates</strong> & <strong>Larry Page</strong>, to pursue a career in Computer Science, and
                            eventually join their ranks by becoming an entrepreneur as well.
                        </p>

                        <p>
                            Please read my <strong>Bio</strong> if you would like to learn more about me, or if you
                            would like a copy of my resume, please click on <strong>Resume</strong>.
                        </p>

                        <p>
                            I will finish this introduction
                            with a quote that I hold dear, and try to live by:
                        </p>

                        <blockquote className="blockquote text-right">
                            <p className="mb-0">Vision Without Execution, Is Hallucination</p>
                            <footer className="blockquote-footer" id="quote-contributor">Thomas Edison</footer>
                        </blockquote>

                    </Col>

                    {/* <div className="col-md-5 p-0">
                        <img src="/images/me.jpg"
                            className="img-fluid profile-img p-0 mb-3 mb-md-0" alt="photo of Alex Nunez" />
                    </div> */}




                    {/* 

                        

                        

                        
                    </div> */}
                    {/* </div> */}
                </Row>
            </Container>
        </div>
        // </div>
    );
}

export default About;