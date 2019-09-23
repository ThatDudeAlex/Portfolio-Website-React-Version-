import React from 'react';
import About from "../components/About";
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';


// Main landing page for my portfolio site 
const Portfolio = () => (
    <div className="page_background_image">
        <About id="aboutComponent" />
        <Experience id="expComponent" />
        <Projects id="projectComponent" />
        <Skills id="skillsComponent" />
        <Contact id="contactComponent" />
    </div>
);

export default Portfolio;