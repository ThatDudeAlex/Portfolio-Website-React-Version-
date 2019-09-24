import React from "react";
import { Container, Row } from 'reactstrap';
import SectionHeading from "./SectionHeading";
import ProjectCards from "./ProjectCards";


const Projects = ({ id }) => {

    const allProjects = [
        {
            name: "Contact Manager- ",
            description: `A web application for contact management, gives each user the ability to add, delete, 
                          or search from their own unique list of contacts.`,
            tech: "HTML, CSS, Bootstrap, JavaScript, Node.js, Express, MySQL, Heroku",
            image: "/images/projects/contactmanager.png",
            git: "mrkjdy/SmallProject",
            url: "https://github.com/mrkjdy/SmallProject",
            id: 1
        },

        {
            name: "Sherlock- ",
            description: `Senior Design Project (in progress) - Web app to study choices made in interactive 
                          media using various biometric scanners`,
            image: "/images/projects/sherlock.png",
            tech: "React, Redux, Node.js, Express, MongoDB, React-Bootstrap",
            url: "https://github.com/BrendonLyra/Sherlock.png",
            git: "BrendonLyra/Sherlock",
            id:2
        },

        {
            name: "Step With Friends- ",
            description: `Android app that tracks number of steps taken by utilizing the phones accelerometer, 
                          allows users to friend each other, and uses a website as a leaderboard `,
            tech: "HTML, CSS, Bootstrap, JavaScript, Node.js, Express, MySQL, Heroku, Android Studios",
            image: "/images/projects/stepwithfriends.png",
            url: "https://github.com/mrkjdy/large-project",
            git: "mrkjdy/large-project",
            id: 3
        },

        {
            name: "Edge detector- ",
            description: `Command line program that takes in a .PGM image as input, and runs Canny Algorithm on 
                          the image. Output is a new image showing only the edges of the original `,
            image: "/images/projects/cannyFinal.png",
            tech: "C, 256x256 PGM images",
            url: "https://github.com/ThatDudeAlex/Canny-Edge-Detection",
            git: "ThatDudeAlex/Canny-Edge-Detection",
            id: 4
        },

        {
            name: "Weather App- ",
            description: `(In progress)- Android app that uses the "Dark Sky" API, to display the
                          the weather based on the location given by the user`,
            image: "/images/projects/Weather_prj.svg",
            tech: "Android Studio, Dark Sky API",
            url: "https://small-project-cop4331.herokuapp.com/",
            git: "",
            id: 5
        },

        {
            name: "Text Prediction- ",
            description: `Command line program that implements a trie data structure. It reads a body of text and builds a lexicon from it, 
                          allowing it to predict the next word`,
            image: "/images/projects/tries_prj.svg",
            tech: "C, Trie data structure",
            url: "https://github.com/ThatDudeAlex/Trie-Text-Prediction-",
            git: "ThatDudeAlex/Trie-Text-Prediction-",
            id: 6
        }
    ];

    return (
        <div id={id}>
            <SectionHeading
                sectionName="PROJECTS"
                headingColor="black"
            />

            <Container className=" text-left pt-4">
                <Row>
                    {allProjects.map(prj => (
                        <ProjectCards 
                            name = {prj.name}
                            description = {prj.description}
                            image = {prj.image}
                            tech = {prj.tech}
                            url = {prj.url}
                            git = {prj.git}
                            key = {prj.name}
                        />
                    ))}
                </Row>
            </Container>

        </div>
    );
}

export default Projects;