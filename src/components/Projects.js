import React, { Fragment } from "react";
import { Container, Row, Col } from 'reactstrap';
import SectionHeading from "./SectionHeading";
import ProjectCards from "./ProjectCards";


const Projects = ({id}) => {

    const allProjects = [
        {
            name: "Contact Manager- ",
            description: `A web application for contact management, gives each user the ability to add, delete, 
                          or search from their own unique list of contacts.`,
            tech: "HTML, CSS, Bootstrap, JavaScript, Node.js, Express, MySQL, Heroku",
            image: "/images/projects/contact-manager.png",
            git: "github.com/mrkjdy/SmallProject",
            url: "https://github.com/mrkjdy/SmallProject"
        },

        {
            name: "Sherlock- ",
            description: `Senior Design Project (in progress) - Web app to study choices made in interactive 
                          media using various biometric scanners`,
            image: "/images/projects/sherlock.png",
            tech: "React, Redux, Node.js, Express, MongoDB, React-Bootstrap",
            url: "https://github.com/BrendonLyra/Sherlock",
            git: "github.com/BrendonLyra/Sherlock"
        },

        {
            name: "Step With Friends- ",
            description: `Android app that tracks number of steps taken by utilizing the phones accelerometer, 
                          allows users to friend each other, and uses a website as a leaderboard `,
            tech: "HTML, CSS, Bootstrap, JavaScript, Node.js, Express, MySQL, Heroku, Android Studios",
            image: "/images/projects/step-with-friends.png",
            url: "https://github.com/mrkjdy/large-project",
            git: "github.com/mrkjdy/large-project"
        },

        {
            name: "Edge detector- ",
            description: `Command line program that takes in a .PGM image as input, and runs Canny Algorithm on 
                          the image. Output is a new image showing only the edges of the original `,
            image: "/images/projects/cannyFinal.png",
            tech: "C, 256x256 PGM images",
            url: "",
            git: ""
        },

        {
            name: "Weather App- ",
            description: `(In progress)- Android app that uses the "Dark Sky" API, to display the
                          the weather based on the location given by the user`,
            image: "/images/projects/Weather_prj.svg",
            tech: "Android Studio, Dark Sky API",
            url: "https://small-project-cop4331.herokuapp.com/",
            git: "github.com/mrkjdy/SmallProject"
        },

        {
            name: "Text Prediction- ",
            description: `Command line program that implements a trie data structure. It reads a body of text and builds a lexicon from it, 
                          allowing it to predict the next word`,
            image: "/images/projects/tries_prj.svg",
            tech: "C, Trie data structure",
            url: "",
            git: ""
        }
    ];

    return (
        <div id={id}>
            <SectionHeading
                sectionName="PROJECTS"
                headingColor="black"
            />
            <ProjectCards
                allProjects={allProjects}
            />
        </div>
    );
}

export default Projects;