import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SectionHeading from "./SectionHeading";
import PageFooter from './PageFooter';

const Contact = () => {
    return (
        <Fragment>
            <img className="img-fluid pt-2 pb-0" src="/images/icons/contact-border.svg" style={{ width: "100%" }} />
            <div style={{ background: "black" }}>
                <SectionHeading
                    sectionName="CONTACT"
                />
                <h5 className="mt-4 mb-3 text-blue"> Have a questions or want to connect?</h5>

                <Container>
                    <Row>
                        <Col>
                            <nav className="nav justify-content-center">
                                <a className="nav-link mr-5" href="http://www.linkedin.com/in/alex-nunez-76545617b"
                                    target="_blank">
                                    <img className="img-fluid contact-icons" src="/images/icons/linkedin-white.svg"
                                        alt="Card image cap" /></a>

                                <a className="nav-link mr-5" href="mailto: alex@alexjnunez.com">
                                    <img className="img-fluid contact-icons" src="/images/icons/mail_icon.svg"
                                        alt="Card image cap" /></a>




                            </nav>
                        </Col>
                    </Row>
                </Container>
                <PageFooter />
            </div>
        </Fragment>
    );
}

export default Contact;