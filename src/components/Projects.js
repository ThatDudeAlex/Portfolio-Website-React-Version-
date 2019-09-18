import React, { Fragment } from "react";
import { Container, Row, Col } from 'reactstrap';
import SectionHeading from "./SectionHeading";
import ProjectCards from "./ProjectCards";


const Projects = () => {

    const allProjects = [
        {
            name: "Contact Manager- ",
            description: "some description about the project goes here just to fill up space and stuff stuff stuff stuff stuff stuff",
            tech: "the tech used for the project goes here",
            image: "/images/projects/contact-manager.png",
            git: "github.com/mrkjdy/SmallProject",
            url: "https://github.com/mrkjdy/SmallProject"
        },

        {
            name: "Sherlock- ",
            description: "some description about the project goes here just to fill up space and stuff stuff stuff stuff stuff stuff",
            tech: "the tech used for the project goes here",
            image: "/images/projects/sherlock.png",
            url: "https://github.com/BrendonLyra/Sherlock",
            git: "github.com/BrendonLyra/Sherlock"
        },

        {
            name: "Step With Friends- ",
            description: "some description about the project goes here just to fill up space and stuff stuff stuff stuff stuff stuff",
            tech: "the tech used for the project goes here",
            image: "/images/projects/step-with-friends.png",
            url: "https://github.com/mrkjdy/large-project",
            git: "github.com/mrkjdy/large-project"
        },

        {
            name: "Edge detector- ",
            description: "some description about the project goes here just to fill up space and stuff stuff stuff stuff stuff stuff",
            tech: "the tech used for the project goes here",
            image: "/images/projects/cannyFinal.png",
            url: "https://small-project-cop4331.herokuapp.com/",
            git: "github.com/mrkjdy/SmallProject"
        },

        {
            name: "Weather App- ",
            description: "some description about the project goes here just to fill up space and stuff stuff stuff stuff stuff stuff",
            tech: "the tech used for the project goes here",
            image: "/images/projects/Weather_prj.svg",
            url: "https://small-project-cop4331.herokuapp.com/",
            git: "github.com/mrkjdy/SmallProject"
        },

        {
            name: "Text Prediction- ",
            description: "some description about the project goes here just to fill up space and stuff stuff stuff stuff stuff stuff",
            tech: "the tech used for the project goes here",
            image: "/images/projects/tries_prj.svg",
            url: "https://small-project-cop4331.herokuapp.com/",
            git: "github.com/mrkjdy/SmallProject"
        }
    ];

    return (
        <Fragment>
            <SectionHeading
                sectionName="PROJECTS"
                headingColor="black"
            />
            <ProjectCards 
                allProjects = {allProjects}
            />
        </Fragment>
    );
}

export default Projects;