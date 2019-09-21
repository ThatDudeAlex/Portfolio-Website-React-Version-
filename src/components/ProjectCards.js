import React from "react";
import { Container, Row, Col } from 'reactstrap';

const ProjectCards = ({ name, description, image, tech, url, git }) => {
    return (


        <Col lg="6" xl="4" className="text-left mt-3 mb-3 p-3">
            <div className="projectCards">

                <img src={image} className="prjImage mb-3" />

                <div className="p-2">
                    <a href={url} target="_blank">
                        <strong className="prjName mr-2">{name}</strong>
                        <span className="prjUrl">{git}</span>
                    </a>


                    <p className="mt-2">{description}</p>

                    <Row>
                        <Col xs="12" md="2" lg="3" xl="4" className="pr-0">
                            <strong>Tech Used: </strong>
                        </Col>

                        <Col xs="12" md="10" lg="9" xl="8" className="pl-md-0">
                            <span className="techDesc">{tech}</span>
                        </Col>
                    </Row>

                </div>
            </div>
        </Col>
        // <h1>hi</h1>
        // {allProjects.map(prj => (
        //     <Col lg="6" xl="4" className="text-left mt-3 mb-3" key={prj.id}>
        //         <div className=" projectCards">
        //             <img src={prj.image} className="prjImage mb-3" />

        //             <div className="p-1">
        //                 <a href={prj.url} target="_blank">
        //                     <strong className="prjName mr-2">{prj.name}</strong>
        //                     <span className="prjUrl">{prj.git}</span>
        //                 </a>


        //                 <p className="mt-2">{prj.description}</p>

        //                 <Row>
        //                     <Col xs="12" md="2" xl="3" className="pr-0">
        //                         <strong>Tech Used: </strong>
        //                     </Col>

        //                     <Col xs="12" md="10" xl="9" className="pl-md-0">
        //                         <span className="techDesc">{prj.tech}</span>
        //                     </Col>
        //                 </Row>

        //             </div>
        //         </div>
        //     </Col>
        // ))}
    );
}

export default ProjectCards;