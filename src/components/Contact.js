import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SectionHeading from "./SectionHeading";
import PageFooter from './PageFooter';
import "../css/contact.css"

const Contact = ({ id }) => {
    return (
        <div id={id} className="" >

            <div style={{ background: "black" }}>
                <img className="img-fluid" src="/images/icons/contact-border.svg" alt="" style={{ width: "100%" }}/>

                <div className="mt-5">
                    <SectionHeading
                        sectionName="CONTACT"
                        headingColor="white"
                    />
                </div>

                <h5 className="mt-4 mb-5 text-blue text-center"> Have a questions or want to connect?</h5>

                <Container style={{paddingBottom: "80px"}}>
                    <Row>
                        <Col>
                            <nav className="nav justify-content-center">
                                <a className="contact-link mr-5 ml-5 mb-4" href="http://www.linkedin.com/in/alex-nunez-76545617b"
                                    target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid contact-icons" src="/images/icons/linkedin-white.svg"
                                        alt="linkedin logo" /></a>

                                <a className="contact-link mr-5 mb-4" href="mailto: josenunez1692@gmail.com">
                                    <img className="img-fluid contact-icons" src="/images/icons/mail_icon.svg"
                                        alt="email icon" /></a>
                            </nav>
                        </Col>
                    </Row>
                </Container>
                <PageFooter />
            </div>
        </div>

    );
}

export default Contact;