import React from "react";
import { Container, Row, Col, Card, CardBody, CardFooter } from 'reactstrap';

const ExperienceCard = ({
    companyLogo,
    altLogo,
    companyUrl,
    companyName,
    companyDesc,
    jobTitle,
    jobDesc,
    accomplishments,
    date,
    key

}) => {


    return (
        <Container className="mb-5">
            <Card>
                <Row>
                    <Col md="3" lg="2">

                        <img src={companyLogo}
                            className="fluid-img p-0 mb-3 mb-md-0" alt={altLogo} />
                    </Col>

                    <Col md="3" lg="6">
                        <div className="company-name-format pt-5 pt-md-3">
                            <span>
                                <a href={companyUrl} target="_blank" className="company-name"> {companyName}
                                </a>
                            </span>
                        </div>
                    </Col>

                    <Col md="6" lg="4">
                        <p className="job-role pt-1 mt-md-3">{jobTitle}</p>
                    </Col>
                </Row>

                <Row>
                    <CardBody>
                        <Col xs="12" className="jobDescList">
                            <p className="pt-3 pb-2 card-exp-intro">
                                <em>
                                    {companyDesc}
                                </em>
                            </p>

                            <ul>
                                {jobDesc.map(job => (<li key={job.id}>{job.desc}</li>))}
                            </ul>

                            <h5><strong>Accomplishments</strong></h5>

                            <ul>
                                {accomplishments.map(accomplish => (<li key={accomplish.id}>{accomplish.desc}</li>))}
                            </ul>
                        </Col>
                    </CardBody>
                </Row>

                <Row className="pr-3">
                    <Col xs={12} className="text-left ml-3 jobDescList">
                        <CardFooter>
                            <p className="pl-0 mb-0 text-muted">
                                {date}
                            </p>
                        </CardFooter>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
}

export default ExperienceCard;