import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SectionHeading from "./SectionHeading";

const Contact = () => {
    return (
        <Fragment>
            <img className="img-fluid pt-2 pb-0" src="/images/icons/contact-border.svg" style={{width: "100%"}} />
            <SectionHeading
                sectionName="CONTACT"
            />
        </Fragment>
    );
}

export default Contact;