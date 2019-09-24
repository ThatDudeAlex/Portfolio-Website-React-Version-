import React from "react";
import { Container, Row, Col, Card, CardBody, CardFooter } from 'reactstrap';
import "../css/experience.css"
import "../css/cards.css"

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
    companyMd,
    jobRoleMd,
    companyLg,
    jobRoleLg,
    id,
}) => {


    return (
        <Container className="mb-5 mt-5" id={`${companyName}-exp`}>
            <Card>
                <Row>
                    <Col md="3" lg="2">
                        <a href={companyUrl} target="_blank" rel="noopener noreferrer">
                            <img src={companyLogo} id={id}
                                className="fluid-img p-0 mb-3 mb-md-0 pt-3 pl-md-2" alt={altLogo} />
                        </a>
                    </Col>

                    <Col md={companyMd} lg={companyLg}>
                        <div className="company-name-format pt-4 pt-md-5 pl-lg-4">
                            <span>
                                <a href={companyUrl} target="_blank" className="company-name" rel="noopener noreferrer"> {companyName}
                                </a>
                            </span>
                        </div>
                    </Col>

                    <Col md={jobRoleMd} lg={jobRoleLg}>
                        <span className="job-role-format">
                            <p className="job-role mt-md-5 mb-0">{jobTitle}</p>
                        </span>
                    </Col>
                </Row>

                <Row>
                    <CardBody>
                        <Col xs="12" className="jobDescList">
                            <p className="pt-3 pb-2 exp-intro">
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