import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SectionHeading from "./SectionHeading";

const PageFooter = () => {
    return (
        <div className="container-fluid bg-black text-center pb-5">
            <p className="text-grey">JOSE A NUNEZ <span className="text-pink">&copy;</span>2019</p>
        </div>
    );
}

export default PageFooter;