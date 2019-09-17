import React, { Fragment } from 'react';
import { Container, Row, Col, Card, CardBody, CardFooter } from 'reactstrap';

const SkillCard = ({ cardTitle, images }) => {
    return (
        <Container className="mt-4">
            <Card className="text-left pt-3">
                <Row>
                    <Col>
                        <p className="skill-name pl-4">{cardTitle}</p>
                    </Col>
                </Row>


                <CardBody>
                    <Row>
                        {images.map(img => (
                            <Col xs="6" md="4" lg={img.lg} className="text-center" key={img.id}>
                                <img src={`/images/skills/${img.imgSource}`}
                                    className="img-fluid skill-img pl-3" alt={`${img.imgDesc} logo`} />
                                <p className="pl-3 pt-2 mb-lg-0 skill"> {`${img.imgDesc}`} </p>
                            </Col>
                        ))}
                    </Row>
                </CardBody>

            </Card>

        </Container>
    );
}

export default SkillCard;