import React from "react";
import { Container, Row, Col } from 'reactstrap';

const ProjectCards = ({ allProjects }) => {
    return (
        <Container className=" text-left pt-4">
            <Row>


                {allProjects.map(prj => (
                    <Col lg="4" className="text-left mt-3 mb-3" key={prj.id}>
                        <div className=" projectCards">
                            <img src={prj.image} className="prjImage mb-3" />
                            <a href={prj.url} target="_blank">
                                <strong className="prjName mr-2">{prj.name}</strong>
                                <span className="prjUrl">{prj.git}</span>
                            </a>
                            <p className="mt-2">{prj.description}</p>
                            <p>{prj.tech}}</p>
                        </div>
                    </Col>
                ))}
                {/* <img src="/images/test.png" className="fluid-img" /> */}

                {/* <div>
                        <a><h5>Somelink goes here-</h5></a>
                        <p>some description about the project goes here just to fill up
                        space and stuff stuff stuff stuff stuff stuff</p>
                        <p>the tech used for the project goes here</p>
                    </div> */}

            </Row>
        </Container>
    );
}

export default ProjectCards;