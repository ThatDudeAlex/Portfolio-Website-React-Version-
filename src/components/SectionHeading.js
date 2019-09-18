import React from "react";
import { Container } from 'reactstrap';

const SectionHeading = ({sectionName, headingColor}) => {
    return (
        <Container  className=" text-center pt-4">
            {/* <div className="container text-center pt-4"> */}
            <h1 className={`section-headings mb-0`}><strong style={{color: `${headingColor}`}}>{sectionName}</strong></h1>
            <img className="img-fluid headings-underline mt-2" src={`/images/icons/contact-line-${headingColor}.svg`}
                alt="underline" />
        </Container>
    );
}

export default SectionHeading;